import React, { createContext, useEffect, useState } from 'react';
 import {createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth' 
import App from '../App';
 
 
//  import { GithubAuthProvider } from "firebase/auth";
 
const auth = getAuth(App);
export const  AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setuser] = useState("");
  const [loading, setLoading] = useState(true);
 const googleProvider = new GoogleAuthProvider();
 
 
 
  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  };
   const signin =  (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   };
  
   const signout = () =>{
    return signOut(auth);
   } 

 
  const forgetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email);
  }
const profileUpdate = (profile) => {
  setLoading(true)
  return updateProfile(auth.currentUser, profile)
}
const googleSignin = () =>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider);
}

useEffect (() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
    setLoading(false)
 
});

return () => unSubscribe();
}, [])
  const AuthInfo = {user,loading, createUser, profileUpdate, signin,signout, googleSignin, forgetPassword}
  return (
    <div>
      <AuthContext.Provider value = {AuthInfo}>
      {children}
      </AuthContext.Provider>
      
    </div>
  );
};

export default AuthProvider;