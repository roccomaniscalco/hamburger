const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = process.env.JAWSDB_URL;
} else {
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "gigabyte",
    database: "burgers_db",
  });
}

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
