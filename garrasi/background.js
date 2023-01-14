import { getDatabase, set, onValue, get, child, ref, push} from "firebase/database";
import {db} from "./src/main.js"
import { ref as storageRef } from 'firebase/storage';
import getUuid from "uuid-by-string"

function getUniqueId(url) {
    return getUuid(url, 3);
}

function getUrlId() {
    console.log("locaStorage: " + localStorage.getItem('url'));
    return getUniqueId(localStorage.getItem('url'));
}

// function loadChannel(channel) {
//     const stoRef = ref(db, "website/bonjour/channel/qna")
//     onValue(stoRef, (snapshot) => {
//         let data = snapshot.val();
//         console.log("logging data: " + data[0]["message"])
//     }, (error) => {
//         console.log("there has been an error: ", error);
//     });
//   }

function addUser(userName, color) {
    const postListRef = ref(db, "user/aUniqueUserID");
    const newPostRef = push(postListRef);
    set(newPostRef, {
        name: userName,
        color: color
    });
}

function addMessage(url, channel, msg, userName, date) {
    const postListRef = ref(db, "website/" + getUniqueId(url) + "/channel/" + channel);
    const newPostRef = push(postListRef);
    set(newPostRef, {
        channel: channel,
        message: msg,
        username: userName,
        date: date
    });
}

function addFire(msg, userName) {
    const postListRef = ref(db, "website/" + getUniqueId(msg.url) + "/channel/" + msg.channel + "/" + msg.id + "/fire");
    const newPostRef = push(postListRef);
    set(newPostRef, {
        userName: true
    });
}

function addFreeze(msg, userName) {
    const postListRef = ref(db, "website/" + getUniqueId(msg.url) + "/channel/" + msg.channel + "/" + msg.id + "/freeze");
    const newPostRef = push(postListRef);
    set(newPostRef, {
        userName: true
    });
}

export {
    getUrlId,
    // loadChannel,
    getUniqueId,
    addUser
}


