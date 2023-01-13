import { getDatabase, set, onValue, get, child, ref} from "firebase/database";
import {db} from "./src/main.js"
import { ref as storageRef } from 'firebase/storage';
import { getUuid } from "uuid-by-string"

function getUniqueId(url) {
    return getUuid(url, 3);
}

function loadChannel(channel) {
    const stoRef = ref(db, "website/bonjour/channel/qna")
    onValue(stoRef, (snapshot) => {
        let data = snapshot.val();
        console.log("logging data: " + data[0]["message"])
    }, (error) => {
        console.log("there has been an error: ", error);
    });
  }

export default {
    loadChannel,
    getUniqueId
}
