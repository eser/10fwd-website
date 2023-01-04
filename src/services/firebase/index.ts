import { FirebaseError, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  type AdditionalUserInfo,
  type Auth,
  browserPopupRedirectResolver,
  getAdditionalUserInfo,
  GithubAuthProvider,
  type OAuthCredential,
  signInWithPopup,
  type UserCredential,
} from "firebase/auth";

import { registry } from "../di/registry";

// interface definitions
// ---------------------
interface FirebaseInterface {
  init: () => void;
}

interface PopupSignInResult {
  userCredential: UserCredential | null;
  oauthCredential: OAuthCredential | null;
  additionalUserInfo: AdditionalUserInfo | null;
  error: Error | null;
}

// underlying members (private)
// ------------------------------
const readConfigFromEnv = function readConfigFromEnv() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
};

// implementation (public)
// -----------------------
class Firebase implements FirebaseInterface {
  hasInitCalled: boolean;
  #internalApp: any;

  constructor() {
    this.hasInitCalled = false;
  }

  init() {
    if (this.hasInitCalled) {
      return;
    }

    const config = readConfigFromEnv();
    const app = initializeApp(config);

    // const analytics = getAnalytics(app);

    registry.setValue("firebase", { config, app });
    // registry.setValue("firebaseAnalytics", { analytics });

    this.#internalApp = app;
    this.hasInitCalled = true;
  }

  // eslint-disable-next-line class-methods-use-this
  async popupSignInWithGitHub(auth: Auth): Promise<PopupSignInResult> {
    const provider = new GithubAuthProvider();

    try {
      const userCredential = await signInWithPopup(
        auth,
        provider,
        browserPopupRedirectResolver,
      );

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const oauthCredential = GithubAuthProvider.credentialFromResult(
        userCredential,
      );

      if (oauthCredential === null) {
        throw new Error("token is null");
      }

      const additionalUserInfo = getAdditionalUserInfo(userCredential);

      return {
        userCredential: userCredential,
        oauthCredential: oauthCredential,
        additionalUserInfo: additionalUserInfo,
        error: null,
      };
    } catch (error) {
      if (error instanceof FirebaseError) {
        const oauthCredential = GithubAuthProvider.credentialFromError(error);

        return {
          userCredential: null,
          oauthCredential: oauthCredential,
          additionalUserInfo: null,
          error: error,
        };
      }

      throw error;
    }
  }
}

const firebase = new Firebase();

export { Firebase, firebase, firebase as default, type FirebaseInterface };
