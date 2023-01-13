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
    apiKey: "AIzaSyCxR_yFb9m8kA293LyGpo41tha-FjHOtYc",
    authDomain: "garrasiteelv2.firebaseapp.com",
    projectId: "garrasiteelv2",
    storageBucket: "garrasiteelv2.appspot.com",
    messagingSenderId: "401608178272",
    appId: "1:401608178272:web:2cc3989f9bb13054b6e105",
    measurementId: "G-H329C3FTY0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

createApp(Home).mount("#app");

export {db};
