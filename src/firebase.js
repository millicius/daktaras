import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA-Yex0CB8VjrnK5JiDd1q3YAtuFPi0obs",
  authDomain: "operaciju-zurnalas.firebaseapp.com",
  projectId: "operaciju-zurnalas",
  storageBucket: "operaciju-zurnalas.appspot.com",
  messagingSenderId: "82290127427",
  appId: "1:82290127427:web:577178676d7d224d18daf6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()