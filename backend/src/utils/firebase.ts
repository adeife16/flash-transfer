import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import {
  signOut,
  createUserWithEmailAndPassword,
  sendEmailVerification,

} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA2B7AOHp3_AGcRKYtnlLSBkvzcUutkO8M",
    authDomain: "flash-transfer-fc379.firebaseapp.com",
    projectId: "flash-transfer-fc379",
    storageBucket: "flash-transfer-fc379.appspot.com",
    messagingSenderId: "426317934778",
    appId: "1:426317934778:web:90ee16850b00ee31cd9283"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app) 

  export function signUpwithEmailAndPassword(email:string,password:string){
    return createUserWithEmailAndPassword(auth,email,password);
  }
  export function sendVerifyEmail(){
    if(auth.currentUser){
      console.log("authcurrentcuser:",auth.currentUser)
      return sendEmailVerification(auth.currentUser)
    }
  }