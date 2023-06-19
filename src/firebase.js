import firebaseConfig from "./config/firebaseConfig";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(firebaseConfig)

const db=getFirestore(firebaseApp);
const auth =getAuth(firebaseApp);


export {db,auth};