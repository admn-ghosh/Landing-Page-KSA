import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your project's Firebase config
// See: https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDldqzqAxxj_4uyYQk3udEUtdt60s0y0xs",
  authDomain: "helpful-topic-482712-p8.firebaseapp.com",
  projectId: "helpful-topic-482712-p8",
  storageBucket: "helpful-topic-482712-p8.firebasestorage.app",
  messagingSenderId: "427548918732",
  appId: "1:427548918732:web:94fe39ac8c21a65f841369",
  measurementId: "G-GEFMR1M26B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);