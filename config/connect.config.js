const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "recruiting_it",
});
if (!db) {
  console.log("Lỗi Rồi");
}

module.exports = db;
