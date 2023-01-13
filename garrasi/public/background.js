// let my_window = 0
// chrome.browserAction.onClicked.addListener(function (tab) {
//     if (my_window === 0) {
//         chrome.windows.create({
//             url: chrome.runtime.getURL("index.html"),
//             type: "popup",
//             height: window.screen.height - 100,
//             width: window.screen.width / 5,
//             left: window.screen.width / 5 * 4,
//             top: 100
//         }, function (win) {
//             // win represents the Window object from windows API
//             // Do something after opening
//             my_window = win.id;
//             console.log("window :", my_window);
//         });
//     } else
//         chrome.windows.update(my_window, { focused: true });
// });

let users = [{
    id: 0,
    name: "FuzzBear27",
    date: new Date(2022, 1, 20),
    comment: "If step 1 is not clear to you, go see LoremIpsum's channel on youtube. He explains it very well.",
    fire: -6,
    color: "orange",
    url: "",
    channel: "Q&A",
  },
  {
    id: 1,
    name: "Kleinefrustuck",
    date: new Date(2022, 1, 15),
    comment: "Instead of doing this manually, you can use \"dolorsiamet\" its a vscode plugin that sets everything up from a GUI interface. It is very well explained and you are sure not to be missing any steps.",
    fire: 10,
    color: "lime",
    url: "",
    channel: "Q&A",
  },
  {
    id: 2,
    name: "WishLorraine",
    date: new Date(2022, 1, 14),
    comment: "u better write ur secrets in a .txt file, it works and is pretty easy! No need for all o zis **** if ur a begginer lol",
    fire: 5,
    color: "cyan",
    url: "",
    channel: "Tips",
  }];

chrome.browserAction.setBadgeText({
    text: users.length.toString()
});


chrome.browserAction.setBadgeBackgroundColor({
    color: "blue"
});
