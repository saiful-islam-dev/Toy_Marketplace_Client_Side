// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBbuQoXHmlOZWyshOirxXDGq0a2NFfDMQ",
  authDomain: "toy-marketplace-5f4cf.firebaseapp.com",
  projectId: "toy-marketplace-5f4cf",
  storageBucket: "toy-marketplace-5f4cf.appspot.com",
  messagingSenderId: "732206090989",
  appId: "1:732206090989:web:af8463e39b5e10650ddae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;