import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAQBCd5CI3WQgQIR_8WvShnCNWqKmqVVI",
  authDomain: "social-media-app-project-4c4a6.firebaseapp.com",
  projectId: "social-media-app-project-4c4a6",
  storageBucket: "social-media-app-project-4c4a6.firebasestorage.app",
  messagingSenderId: "1092212146437",
  appId: "1:1092212146437:web:31938718f25026049bf76c",
  measurementId: "G-RD4H4K63YP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();