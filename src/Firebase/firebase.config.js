import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDCqXlfpe-mqMwhUci-Kshq2aU6juPIXGA",
  authDomain: "b12a10-foodlovers.firebaseapp.com",
  projectId: "b12a10-foodlovers",
  storageBucket: "b12a10-foodlovers.firebasestorage.app",
  messagingSenderId: "374061747489",
  appId: "1:374061747489:web:97a6efd4228ff0fa630260"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;