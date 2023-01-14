import { getDatabase, set, onValue, get, child, ref, push, remove } from "firebase/database";
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

function addUser(userName, color) {
    const postListRef = ref(db, "user");
    const newPostRef = push(postListRef);
    set(newPostRef, {
        name: userName,
        color: color
    });
}

function addMessage(url_id, msg) {
    const date = new Date();
    const postListRef = ref(db, "website/" + url_id + "/messages");
    const newPostRef = push(postListRef);
    set(newPostRef, {
        channel: msg.channel,
        message: msg.message,
        username: msg.name,
        fire: [""],
        freeze: [""],
        date: date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    });
}

function addFire(msg, userName) {
    for (let i = 0; i < msg.fire.length; i++) {
        if (msg.fire[i] === userName) {
            const postListRef = ref(db, "website/" + getUrlId() + "/messages/" + msg.id + "/fire");
            msg.fire = msg.fire.filter(e => e !== userName);
            set(postListRef, msg.fire);
            return;
        }
    }
    for (let i = 0; i < msg.freeze.length; i++) {
        if (msg.freeze[i] === userName) {
            console.log(msg.freeze[i] + " === " + userName)
            const postListRef = ref(db, "website/" + getUrlId() + "/messages/" + msg.id + "/freeze");
            msg.freeze.splice(i, 1);
            set(postListRef, msg.freeze);
        }
    }
    const postListRef = ref(db, "website/" + getUrlId() + "/messages/" + msg.id + "/fire");
    msg.fire.push(userName)
    set(postListRef, msg.fire);
}

function addFreeze(msg, userName) {
    for (let i = 0; i < msg.freeze.length; i++) {
        if (msg.freeze[i] === userName) {
            console.log(msg.freeze[i] + " === " + userName)
            const postListRef = ref(db, "website/" + getUrlId() + "/messages/" + msg.id + "/freeze");
            msg.freeze = msg.freeze.filter(e => e !== userName);
            set(postListRef, msg.freeze);
            return;
        }
    }
    for (let i = 0; i < msg.fire.length; i++) {
        if (msg.fire[i] === userName) {
            console.log(msg.fire[i] + " === " + userName)
            const postListRef = ref(db, "website/" + getUrlId() + "/messages/" + msg.id + "/fire");
            msg.fire.splice(i, 1);
            set(postListRef, msg.fire);
        }
    }
    const postListRef = ref(db, "website/" + getUrlId() + "/messages/" + msg.id + "/freeze");
    msg.freeze.push(userName)
    set(postListRef, msg.freeze);

}

export {
    getUrlId,
    getUniqueId,
    addUser,
    addMessage,
    addFire,
    addFreeze
}


