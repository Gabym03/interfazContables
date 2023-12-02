import { boot } from "quasar/wrappers";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUTyybz7Ga39lrOlInHBf0cw9gJf0Gawo",
  authDomain: "bdcontables.firebaseapp.com",
  projectId: "bdcontables",
  storageBucket: "bdcontables.appspot.com",
  messagingSenderId: "394055101210",
  appId: "1:394055101210:web:a9ca19cb15eacf72fc5aa3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});

export { db };
