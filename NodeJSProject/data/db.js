const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);

connection.connect(function (err) {
  if (err) throw err;

  console.log("MYSQL Connected!");
});

module.exports = connection.promise();
