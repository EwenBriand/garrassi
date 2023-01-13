import { createApp } from "vue";
import Home from "./Home.vue";
import "bootstrap/dist/css/bootstrap.css";
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore/lite';
// import {  collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";
// import { connectFirestoreEmulator, doc, onSnapshot } from "firebase/firestore";
import "bootstrap/dist/js/bootstrap.js";

const firebaseConfig = {
    apiKey: "AIzaSyAiMv-BKmPkq8IppyYa76bcqRA0lauIwzY",
    authDomain: "garrasiteel.firebaseapp.com",
    projectId: "garrasiteel",
    storageBucket: "garrasiteel.appspot.com",
    messagingSenderId: "165070487710",
    appId: "1:165070487710:web:06c20aaea7999447b3bb8f",
    measurementId: "G-G6D1MJY0YM",
    databaseURL: "https://garrasiteel-default-rtdb.europe-west1.firebasedatabase.app"
};
const app = initializeApp(firebaseConfig);
// "https://garrasiteel-default-rtdb.europe-west1.firebasedatabase.app"
const db = getDatabase();

createApp(Home).mount("#app");

export {db};
