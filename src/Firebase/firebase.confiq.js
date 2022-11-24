// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCWrWDOUFk-0w3LeTOGeAIKALd04sqwJN8",
//   authDomain: "recycle-clothh.firebaseapp.com",
//   projectId: "recycle-clothh",
//   storageBucket: "recycle-clothh.appspot.com",
//   messagingSenderId: "937627916947",
//   appId: "1:937627916947:web:1116b1a7bbf42b343b8b66"
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,  
  projectId: process.env.REACT_APP_projectId,   
  storageBucket: process.env.REACT_APP_storageBucket, 
  messagingSenderId: process.env.REACT_APP_messagingSenderId,  
  appId: process.env.REACT_APP_appId   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);