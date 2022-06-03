import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX2QMxgopf22K-eUd7cb4apm2MhRPtMHY",
  authDomain: "movies-e6b6a.firebaseapp.com",
  projectId: "movies-e6b6a",
  storageBucket: "movies-e6b6a.appspot.com",
  messagingSenderId: "152327735190",
  appId: "1:152327735190:web:0161d5731ec6c878a33fb7"
};



const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
