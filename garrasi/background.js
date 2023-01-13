// import { initializeApp } from "firebase/app"
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getDatabase, ref, set, onValue, get, child} from "firebase/database";
// import { connectFirestoreEmulator, doc, onSnapshot } from "firebase/firestore";
// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyAiMv-BKmPkq8IppyYa76bcqRA0lauIwzY",
//     authDomain: "garrasiteel.firebaseapp.com",
//     projectId: "garrasiteel",
//     storageBucket: "garrasiteel.appspot.com",
//     messagingSenderId: "165070487710",
//     appId: "1:165070487710:web:06c20aaea7999447b3bb8f",
//     measurementId: "G-G6D1MJY0YM"
//   };
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();

import {db} from "./src/main.js"

const availableChannels = ["qna", "feedback", "discuchat", "tips"];
// const generateUserId = postsRef.push();
// const auth = getAuth();;

function getCustomID() {
    // return url.length(); // TODO: unique key
    return "bonjour";
}

function test(channel, uniqueID) {
    const dbRef = ref(getDatabase());
    let result = null;
    console.log("loadChannelOnce" + get(child(dbRef, "website/" + uniqueID + "/channel/" + channel + "/")));
    console.log("db path is " + "website/" + uniqueID + "/channel/" + channel + "/");

    get(child(dbRef, "website/" + uniqueID + "/channel/" + channel + "/")).then((snapshot) => {
        console.log(snapshot.val())
    });
    console.log("ici cest le result: " + result);
    return result;
}

function loadChannelOnce(channel, uniqueID) {
    const dbRef = ref(getDatabase());
    let result = null;

    get(child(dbRef, "website/" + "bonjour" + "/channel/" + "qna" + "/0/").then((snapshot) => {
        console.log(snapshot.val()); }))
    //     if (snapshot.exists()) {
    //         console.log("HERE!" + snapshot.val());
    //         result = snapshot.val();
    //     } else {
    //         console.log("No data available");
    //     }
    //     }).catch((error) => {
    //         console.log("there has been an error");
    //         console.error(error);
    // });
    // console.log("ici cest le result: " + result);
    // return result;
}

//autoUpdateHandler : (snapshot) => {...}
function loadChannel(channel, autoUpdateHandler) {
    if (availableChannels.indexOf(channel) < 0) {
        console.log("unavailable channel");
        return;
    }
    let url = undefined;
    let uniqueID = undefined;
    try {
      console.log("tabs: ", chrome.tabs);
      console.log("tabs.query: ", chrome.tabs.query);
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            let activeTab = tabs[0];
            url = activeTab.url.split('?')[0];
            uniqueID = getCustomID(url);
            let website = ref(db, "website/" + uniqueID + "/channel/" + channel + "/");
            console.log("ref is " + website);
            onValue(website, autoUpdateHandler);
        });
    } catch (error) {
        console.log("error db in loadChannel, or empty channel");
        console.log(error);
    }
    return loadChannelOnce(channel, uniqueID);
}

function getChannel(channel) {
    // let activeTab = tabs[0];
    // //let url = activeTab.url.split('?')[0];
    // let uniqueID = getCustomID();
    // testa.ref("website/" + "bonjour" + "/channel/" + "qna" + "/0").on('value', (snapshot) => {
    //     console.log(snapshot.val());
    //   });

    // let result = undefined;
    // chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    //     let activeTab = tabs[0];
    //     let url = activeTab.url.split('?')[0];
    //     let uniqueID = getCustomID(url);
    //     // let website = ref(db, "website/" + uniqueID + "/channel/" + channel + "/");
    //     let website = ref(db, "website");
    //     onValue(website, (snapshot) => {
    //         console.log("onValue: " + snapshot.val());
    //         result = snapshot.val();
    //     });
    // });
    console.log("getChannel lol: " + result);
}

function addUser(name, color) {
}

function deleteme() {
    console.log(db)
    console.log("jpp?");
    const starCountRef = ref(db, 'website/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
    }, (error) => {
        console.log("there has been an error in deleteme: ", error);
    });
    // const snapshot = await get(starCountRef)
    // console.log("onvalue has error? " + onValue(starCountRef, snapshot));
    console.log("startcountref: ", starCountRef)
    console.log("JPP!");
}


export {
    loadChannel,
    loadChannelOnce,
    getChannel,
    deleteme
}

