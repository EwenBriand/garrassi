chrome.browserAction.onClicked.addListener(function (tab) {
    // chrome.windows.create({
    //     url: chrome.runtime.getURL("index.html"),
    //     type: "popup",
    //     height: window.screen.height - 100,
    //     width: window.screen.width / 5,
    //     left: window.screen.width / 5 * 4,
    //     top: 100
    // }, function (win) {
    //     // win represents the Window object from windows API
    //     // Do something after opening
    // });
});

chrome.browserAction.setBadgeText({
    text: "3"
});

console.log("Setting badge text");

chrome.browserAction.setBadgeBackgroundColor({
    color: "blue"
});
