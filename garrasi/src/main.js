import { createApp } from "vue";
import Home from "./Home.vue";
import "bootstrap/dist/css/bootstrap.css";
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, set, onValue, get, child} from "firebase/database";
import { connectFirestoreEmulator, doc, onSnapshot } from "firebase/firestore";



import "bootstrap/dist/js/bootstrap.js";

const firebaseConfig = {
    apiKey: "AIzaSyAiMv-BKmPkq8IppyYa76bcqRA0lauIwzY",
    authDomain: "garrasiteel.firebaseapp.com",
    projectId: "garrasiteel",
    storageBucket: "garrasiteel.appspot.com",
    messagingSenderId: "165070487710",
    appId: "1:165070487710:web:06c20aaea7999447b3bb8f",
    measurementId: "G-G6D1MJY0YM"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

createApp(Home).mount("#app");

export {db};
