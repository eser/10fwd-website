import * as firebaseAuth from "firebase/auth";
import {
  browserPopupRedirectResolver,
  getAdditionalUserInfo,
} from "firebase/auth";

import { registry } from "../di/registry";
import { firebase } from "../firebase/index";
import { createUser } from "../requests/authRequests";

// interface definitions
// ---------------------

// TODO: Handle linking accounts
export interface AuthResponse {
  userCredential: firebaseAuth.UserCredential;
  additionalUserInfo: firebaseAuth.AdditionalUserInfo;
}
interface AuthInterface {
  init: () => void;

  signInWithCustomToken: (customToken: string) => Promise<any>;
  signInWithGoogle: () => Promise<AuthResponse>;
  signInWithApple: () => Promise<AuthResponse>;
  signInWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<AuthResponse>;
  createUserWithEmailAndPassword: (
    email: string,
    password: string,
    displayName: string,
  ) => Promise<AuthResponse>;
  fetchSignInMethodsForEmail: (email: string) => Promise<string[]>;
  sendPasswordResetEmail: (email: string) => Promise<any>;
  signOut: () => Promise<any>;

  onAuthStateChanged: (callback: (user: any) => void) => void;

  getUser: () => any;
  getIdToken: () => Promise<string>;
}

// implementation (public)
// -----------------------
class Auth implements AuthInterface {
  hasInitCalled: boolean;
  #internalAuth: firebaseAuth.Auth;

  constructor() {
    this.hasInitCalled = false;
  }

  init() {
    if (this.hasInitCalled) {
      return;
    }

    firebase.init();

    const { app } = registry.get("firebase");

    const auth = firebaseAuth.getAuth(app);

    registry.setValue("auth", { auth });

    this.#internalAuth = auth;
    // console.log('init', this.#internalAuth);
    this.hasInitCalled = true;
  }

  signInWithCustomToken(
    customToken: string,
  ): Promise<firebaseAuth.UserCredential> {
    return firebaseAuth.signInWithCustomToken(this.#internalAuth, customToken);
  }

  async signInWithGoogle(): Promise<AuthResponse> {
    // eslint-disable-next-line no-useless-catch
    try {
      const userCredential = await firebaseAuth.signInWithPopup(
        this.#internalAuth,
        new firebaseAuth.GoogleAuthProvider(),
        browserPopupRedirectResolver,
      );
      const additionalUserInfo = getAdditionalUserInfo(userCredential);

      const { displayName, email } = userCredential.user;
      if (additionalUserInfo.isNewUser) {
        await createUser(displayName, email);
      }

      return { userCredential, additionalUserInfo };
    } catch (e) {
      // console.error('signInWithGoogle error', e);
      throw e;
    }
  }

  async signInWithApple(): Promise<AuthResponse> {
    // eslint-disable-next-line no-useless-catch
    try {
      const userCredential = await firebaseAuth.signInWithPopup(
        this.#internalAuth,
        new firebaseAuth.OAuthProvider("apple.com"),
        browserPopupRedirectResolver,
      );
      const additionalUserInfo = getAdditionalUserInfo(userCredential);
      const { displayName, email } = userCredential.user;
      if (additionalUserInfo.isNewUser) {
        await createUser(displayName, email);
      }

      return { userCredential, additionalUserInfo };
    } catch (e) {
      // console.error('signInWithApple error', e);
      throw e;
    }
  }

  async signInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<AuthResponse> {
    // eslint-disable-next-line no-useless-catch
    try {
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(
        this.#internalAuth,
        email,
        password,
      );
      const additionalUserInfo = getAdditionalUserInfo(userCredential);

      return { userCredential, additionalUserInfo };
    } catch (e) {
      // console.error('signInWithEmailAndPassword error', e);
      throw e;
    }
  }

  async createUserWithEmailAndPassword(
    email: string,
    password: string,
    displayName: string,
  ): Promise<AuthResponse> {
    // eslint-disable-next-line no-useless-catch
    try {
      const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
        this.#internalAuth,
        email,
        password,
      );
      await firebaseAuth.updateProfile(userCredential.user, { displayName });
      const additionalUserInfo = getAdditionalUserInfo(userCredential);
      await createUser(displayName, email);

      return { userCredential, additionalUserInfo };
    } catch (e) {
      // console.error('createUserWithEmailAndPassword error', e);
      throw e;
    }
  }

  fetchSignInMethodsForEmail(email: string): Promise<string[]> {
    return firebaseAuth.fetchSignInMethodsForEmail(this.#internalAuth, email);
  }

  sendPasswordResetEmail(email: string): Promise<any> {
    return firebaseAuth.sendPasswordResetEmail(this.#internalAuth, email);
  }

  signOut() {
    return firebaseAuth.signOut(this.#internalAuth);
  }

  onAuthStateChanged(callback: (user: firebaseAuth.User) => void) {
    firebaseAuth.onAuthStateChanged(this.#internalAuth, (user) => {
      callback(user);
    });
  }

  getUser() {
    return this.#internalAuth?.currentUser ?? null;
  }

  getIdToken() {
    const currentUser = this.#internalAuth.currentUser;

    if (currentUser === null) {
      return null;
    }

    return firebaseAuth.getIdToken(currentUser);
  }
}

const auth = new Auth();

export { Auth, auth, auth as default, type AuthInterface, firebaseAuth };
