import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt_9gmvMKr15R_M4sCTVXYJWK1EK94IBc",
  authDomain: "react-netflix-clone-bbdb2.firebaseapp.com",
  projectId: "react-netflix-clone-bbdb2",
  storageBucket: "react-netflix-clone-bbdb2.appspot.com",
  messagingSenderId: "669709421793",
  appId: "1:669709421793:web:fcbbef502887df3409bba0",
  measurementId: "G-HYT8N45CP6"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);