import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID ,
  storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID ,
  measurementId: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);