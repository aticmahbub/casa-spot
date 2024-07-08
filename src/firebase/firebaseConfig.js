// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp3-ApjEvA9OE3cVptSDrACi0kgaaRKGw",
  authDomain: "project-casa-spot.firebaseapp.com",
  projectId: "project-casa-spot",
  storageBucket: "project-casa-spot.appspot.com",
  messagingSenderId: "1031652580722",
  appId: "1:1031652580722:web:0ced8567972f78e986d1eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth