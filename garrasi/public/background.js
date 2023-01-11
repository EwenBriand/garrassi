
// chrome.browserAction.onClicked.addListener(function (tab) {
//     chrome.windows.create({
//         url: chrome.runtime.getURL("mypage.html"),
//         type: "popup"
//     }, function (win) {
//         // win represents the Window object from windows API
//         // Do something after opening
//     });
// });

chrome.browserAction.setBadgeText({
    text: "3"
});

console.log("Setting badge text");

chrome.browserAction.setBadgeBackgroundColor({
    color: "blue"
});