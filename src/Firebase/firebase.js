// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTcNgNGRHHKcuDW-loG48jPiNQLzVFIg",
  authDomain: "job-portal-80077.firebaseapp.com",
  projectId: "job-portal-80077",
  storageBucket: "job-portal-80077.appspot.com",
  messagingSenderId: "942702516363",
  appId: "1:942702516363:web:3e8cfed39309aefcf6dc8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app