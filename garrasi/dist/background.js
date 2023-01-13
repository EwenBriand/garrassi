let my_window = 0
let url = 0

function create_window(url) {

    chrome.windows.create({
        url: chrome.runtime.getURL("index.html"),
        type: "popup",
        height: window.screen.height - 100,
        width: window.screen.width / 5,
        left: window.screen.width / 5 * 4,
        top: 100
    }, function (win) {
        // win represents the Window object from windows API
        // Do something after opening
        my_window = win.id;
        console.log("window :", my_window);
        console.log(win)
        console.log(win.tabs[0].url)
        chrome.tabs.sendMessage(win.id, { msg: "hello" }, {}, function (response) {
            console.log(response)
        });

    });
}

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
//         let url = tabs[0].url;
//         console.log("url :", url)
//     });
// })

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log("From popup.js")
//     console.log(request.msg)
// })

// chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
//     console.log("Received message from " + sender + ": ", request);
//     sendResponse({ received: true }); //respond however you like
// });

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("Tab clicked :", tab)
    console.log(tab.url)
    // chrome.runtime.sendMessage({ msg: tab.url }, function (response) {
    //     console.log(response)
    // });
    localStorage.setItem('url', tab.url)

    if (my_window === 0)
        create_window(url)
    else {
        chrome.windows.getAll({ populate: true }, function (window_list) {
            let find = 0
            console.log("window list :", window_list);
            console.log("my_window :", my_window);
            for (var i = 0; i < window_list.length; i++) {
                if (window_list[i].id === my_window) {
                    chrome.windows.update(my_window, { focused: true });
                    find = 1
                    break;
                }
            }
            if (find === 0)
                create_window(url);
        });

    }
});


chrome.browserAction.setBadgeText({
    text: "3"
});

console.log("Setting badge text");

chrome.browserAction.setBadgeBackgroundColor({
    color: "blue"
});
