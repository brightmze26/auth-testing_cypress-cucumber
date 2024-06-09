import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmL80PAf_qSrmLz19zH-n6Z5KHT76UpAc",
  authDomain: "nextfirebase-aceb6.firebaseapp.com",
  databaseURL: "https://nextfirebase-aceb6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nextfirebase-aceb6",
  storageBucket: "nextfirebase-aceb6.appspot.com",
  messagingSenderId: "1056292768304",
  appId: "1:1056292768304:web:0ced01da8c8b5688533bf5",
  measurementId: "G-1QDHYV6J28"
};

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);

export { db };