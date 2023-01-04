import { assert } from "../../shared/assert";
import * as firebaseAuth from "firebase/auth";

import { registry } from "../di/registry";
import { firebase } from "../firebase/index";
// import { createUser } from "../requests/authRequests";

// interface definitions
// ---------------------

// TODO: Handle linking accounts
interface AuthResponse {
  userCredential: unknown | null;
  oauthCredential: unknown | null;
  additionalUserInfo: unknown | null;
  error: Error | null;
}

interface AuthInterface {
  init: () => void;

  signInWithCustomToken: (customToken: string) => Promise<any>;
  signInWithGitHub: () => Promise<AuthResponse>;
  signOut: () => Promise<any>;

  onAuthStateChanged: (callback: (user: unknown | null) => void) => void;

  getUser: () => unknown | null;
  getIdToken: () => Promise<string | null>;
}

// implementation (public)
// -----------------------
class Auth implements AuthInterface {
  hasInitCalled: boolean;
  #internalAuth: firebaseAuth.Auth | null;

  constructor() {
    this.hasInitCalled = false;
    this.#internalAuth = null;
  }

  init() {
    if (this.hasInitCalled) {
      return;
    }

    firebase.init();

    const { app } = registry.get("firebase");

    const firebaseAuthObject = firebaseAuth.getAuth(app);

    registry.setValue("firebaseAuthObject", firebaseAuthObject);

    this.#internalAuth = firebaseAuthObject;
    // console.log('init', this.#internalAuth);
    this.hasInitCalled = true;
  }

  signInWithCustomToken(
    customToken: string,
  ): Promise<firebaseAuth.UserCredential> {
    assert(this.#internalAuth !== null, "internalAuth is not initialized");

    return firebaseAuth.signInWithCustomToken(this.#internalAuth, customToken);
  }

  async signInWithGitHub(): Promise<AuthResponse> {
    assert(this.#internalAuth !== null, "internalAuth is not initialized");

    const result = await firebase.popupSignInWithGitHub(this.#internalAuth);

    // userCredential.user.displayName
    // userCredential.user.email
    // oauthCredential.accessToken
    // additionalUserInfo.isNewUser

    return {
      userCredential: result.userCredential,
      oauthCredential: result.oauthCredential,
      additionalUserInfo: result.additionalUserInfo,
      error: result.error,
    };
  }

  signOut() {
    assert(this.#internalAuth !== null, "internalAuth is not initialized");

    return firebaseAuth.signOut(this.#internalAuth);
  }

  onAuthStateChanged(callback: (user: firebaseAuth.User | null) => void) {
    assert(this.#internalAuth !== null, "internalAuth is not initialized");

    firebaseAuth.onAuthStateChanged(this.#internalAuth, (user) => {
      callback(user);
    });
  }

  getUser() {
    assert(this.#internalAuth !== null, "internalAuth is not initialized");

    return this.#internalAuth.currentUser ?? null;
  }

  async getIdToken() {
    assert(this.#internalAuth !== null, "internalAuth is not initialized");

    const currentUser = this.#internalAuth.currentUser;

    if (currentUser === null) {
      return null;
    }

    return firebaseAuth.getIdToken(currentUser);
  }
}

const auth = new Auth();

export {
  Auth,
  auth,
  auth as default,
  type AuthInterface,
  type AuthResponse,
  firebaseAuth,
};
