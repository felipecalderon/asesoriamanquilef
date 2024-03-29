import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const {
    FB_apiKey,
    FB_authDomain,
    FB_projectId,
    FB_storageBucket,
    FB_messagingSenderId,
    FB_appId
} = process.env

const firebaseConfig = {
    apiKey: FB_apiKey,
    authDomain: FB_authDomain,
    projectId: FB_projectId,
    storageBucket: FB_storageBucket,
    messagingSenderId: FB_messagingSenderId,
    appId: FB_appId,
  };

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app);