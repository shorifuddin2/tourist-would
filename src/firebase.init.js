import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCf3_RZXO958JC2FqV3vfO3P0oiURs4SHQ",
    authDomain: "tourist-man.firebaseapp.com",
    projectId: "tourist-man",
    storageBucket: "tourist-man.appspot.com",
    messagingSenderId: "623666218588",
    appId: "1:623666218588:web:2ad1b1b0fed58e557dc899",
    measurementId: "G-4QLR2V1TCD"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
