// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_6VpA30EmycYlOm4ba0qnX5TCr4rpjJA',
  authDomain: 'firestore-42105.firebaseapp.com',
  projectId: 'firestore-42105',
  storageBucket: 'firestore-42105.appspot.com',
  messagingSenderId: '297806761557',
  appId: '1:297806761557:web:9490f7e2f4a9fe1385cedc',
  measurementId: 'G-FHM2433LVD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
