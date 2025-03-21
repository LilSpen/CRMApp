import initializeApp from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

    apiKey: "AIzaSyB_6Mc7AgSYnOxqJI7OnCYQtz1JhZdvJC8",

    authDomain: "crmapp-db71c.firebaseapp.com",

    projectId: "crmapp-db71c",

    storageBucket: "crmapp-db71c.firebasestorage.app",

    messagingSenderId: "286688401259",

    appId: "1:286688401259:web:4ebf9faa6215cfe90bde2e",

    measurementId: "G-3NGYQSEV60"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();