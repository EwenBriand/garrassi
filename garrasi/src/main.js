import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("From popup.js")
    console.log(request.msg)
})
createApp(App).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
