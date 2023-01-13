// import { Server } from "socket.io";
// const http = require("http").Server(app);
// const path = require("path");
// const DataBase = require("./database.js");
// const mongo = require("mongodb")
// const DB = require("DB");²
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
        const io = new Server(httpServer, {cors: {headers: {"Access-Control-Allow-Origin": "*"}, origin: '*', methods: ["GET", "POST"], }});

///////////////////////////////////////////////////////////////////////////////
//                       DB RELATED REQUESTS HANDLING                        //
///////////////////////////////////////////////////////////////////////////////

// /*
// * add the msg in the db:
// * creates the channel for the website if needed
// * broadcasts all the msgs sorted by upvotes, except in the discuchat where it
// * is sorted by date (most ancient messages lower)
// * call it with:
// * socket.emit("addMsg", {url: "http://oui.fr", channel: "tips", username: "barnabe", content: "trop bien lol"});
// */
// io.on("addMsg", async (data) => {

//     try {
//         if (availableChannels.includes(data.channel)) {
//             socket.broadcast.emit("addMsgResult", await DB.addMsg(data));
//         }
//     } catch (error) {

//     }
// });

io.on("loadChannel", async (data) => {
    // io.emit("chatContent", await DB.loadChannel(data));
    console.log("got pinged")
    io.emit("chatContentUpdate", [{
        name: "oui",
        date: Date.now(),
        comment: "trop de la balle",
        fire: 0,
        color: "orange"
      }])
});


httpServer.listen(3000);
