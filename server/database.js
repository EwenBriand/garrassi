// const { MongoClient } = require("mongodb");
// const url = "mongodb+srv://Garry:FZpdGxpnjKqwZxfm@cluster0.2ndba1e.mongodb.net/test"; // TODO: put this in a secret or smth

// const client = new MongoClient(url).db("garrasi").collection("websites");
// const availableChannels = ["tips", "qna", "discuchat", "feedback"];

// class DB {
//   constructor(){

//   };

//   sortMsg(a, b) {
//     return a["data"] - b["data"];
//   }

//   async loadChannel(data) {
//     let newUrl = undefined;
//     let channel = undefined;

//     try {
//       await client.connect();
//       newUrl = client.findOne({"url": data.url});
//       if (newUrl == null) {
//         channel = [];
//       } else {
//         channel = newUrl[data.channel];
//       }
//     } catch (error) {
//       console.log(error);
//       channel = [];
//     } finally {
//       await client.close();
//       return channel;
//     }
//   }

//   async addMsg(data) {
//     let newUrl = undefined;
//     let date = new Date();

//     try {
//       await client.connect();
//       newUrl = client.findOne({"url": data.url});
//       if (newUrl == null) {
//         newUrl = {
//           "url": data.url,
//           "tips": [],
//           "qna": [],
//           "feedback": [],
//           "discuChat": []
//         }
//       }
//       newUrl[data.channel].append({
//         "username": data.username,
//         "color": data.color,
//         "content": data.content,
//         "upvote": 0,
//         "date": Date.now()
//         "time": addZero(d.getHours()) + addZero(d.getMinutes())
//       })
//       newUrl[data.channel].sort(sortMsg);
//       client.updateOne({ "url": data.url, }, { "$set": newUrl }, {upsert: true});
//     } catch (error) {
//       newUrl = {
//         "url": data.url,
//         "tips": [],
//         "qna": [],
//         "feedback": [],
//         "discuChat": []
//       };
//     } finally {
//       await client.close();
//       return newUrl;
//     }
//   };
// }

// module.exports = DB
