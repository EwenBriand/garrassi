const mysql = require("mysql2");

let db = null;

var config = {
  method: 'post',
  url: 'https://garrasi-cloud1-laurentj.harperdbcloud.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic YOUR-AUTH-HEADER'
  },
  data : data
};

class DB {
  constructor() {
    db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "DB_PASSWORD",
      database: "garrasi",
    });
    db.connect(function (err) {
      if (err) console.log(err);
    });
  }

  addUser(data) {
    return new Promise(async (resolve, reject) => {
      if (await this.checkUserExistence(data)) {
        resolve(true);
      } else
        db.execute(
          "INSERT INTO users (name, user_id) VALUES (?,?)", [data.name, data.userId],
          function (err, rows) {
            if (err) reject(new Error(err));
            else resolve(rows);
          }
        );
    });
  }

  checkUserExistence(data) {
    return new Promise((resolve, reject) => {
      db.execute(
        "SELECT * FROM users WHERE name = ?",[data.name],
        function (err, rows) {
          if (err) reject(new Error(err));
          else resolve(rows[0]);
        }
      );
    });
  }

  fetchUserMessages(data) {
    const messages = [];
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * from messages where name =?",
        [data.name],
        function (err, rows) {
          if (err) reject(err);
          else resolve(rows);
        }
      );

    });
  }

  storeUserMessage(data) {
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO messages (message, user_id, name) VALUES (?,?,?)", [data.message, data.user_id, data.name],
        function (err, rows) {
          if (err) reject(new Error(err));
          else resolve(rows);
        }
      );
    });
  }
}

module.exports = DB;