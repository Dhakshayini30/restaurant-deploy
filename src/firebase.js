import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDJhc4WXDgTg6mNkuSh9cMKJBXxer3ntMA",
  authDomain: "myapp-ff45e.firebaseapp.com",
  databaseURL: "https://myapp-ff45e-default-rtdb.firebaseio.com",
  projectId: "myapp-ff45e",
  storageBucket: "myapp-ff45e.appspot.com",
  messagingSenderId: "1007102760062",
  appId: "1:1007102760062:web:5bc975cc4fa41f00d9342f",
  measurementId: "G-NYD2GJZ7BF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const analytics = getAnalytics(app);
const storage=getStorage(app);
export { app, auth, db,storage ,analytics};
