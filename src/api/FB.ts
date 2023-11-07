import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBgWfBuGR8HR_9kUDjXTuX9mplh-mEfzWQ",
  authDomain: "personal-22643.firebaseapp.com",
  projectId: "personal-22643",
  storageBucket: "personal-22643.appspot.com",
  messagingSenderId: "606392307032",
  appId: "1:606392307032:web:fb64e41bd70476c7c3e92d",
  databaseURL: 'https://personal-22643-default-rtdb.europe-west1.firebasedatabase.app'
};

export const FB_APP = initializeApp(firebaseConfig);