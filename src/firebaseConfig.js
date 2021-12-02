import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAwZnun2ohf4EhvIRYvqHiPH-tkjAkvpck",
    authDomain: "sgew-5b5d3.firebaseapp.com",
    projectId: "sgew-5b5d3",
    storageBucket: "sgew-5b5d3.appspot.com",
    messagingSenderId: "225659241900",
    appId: "1:225659241900:web:b6762bd40fd26d128d6609",
    measurementId: "G-MZW9VEBM81"
  };

  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);