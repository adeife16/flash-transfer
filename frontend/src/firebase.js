// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBqPSeAVvl5LAjfMG6O_-utcJoN0bugG4I",
//   authDomain: "flashtoken.firebaseapp.com",
//   projectId: "flashtoken",
//   storageBucket: "flashtoken.appspot.com",
//   messagingSenderId: "49429446733",
//   appId: "1:49429446733:web:55009041cb0874bf121c04"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);





















import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAwZK0bxux5cw7CXPus_IUdctua4d57tqk",
  authDomain: "flashtss.firebaseapp.com",
  projectId: "flashtss",
  storageBucket: "flashtss.appspot.com",
  messagingSenderId: "500703341353",
  appId: "1:500703341353:web:85d24f610125898ea32538",


};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app) 
