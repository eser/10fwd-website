import { initializeApp } from "firebase/app";

import { registry } from "../di/registry";

// interface definitions
// ---------------------
interface FirebaseInterface {
  init: () => void;
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

    registry.setValue("firebase", { config, app });

    this.#internalApp = app;
    this.hasInitCalled = true;
  }
}

const firebase = new Firebase();

export { Firebase, firebase, firebase as default, type FirebaseInterface };
