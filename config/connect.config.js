const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "sql12.freesqldatabase.com",
  user: "sql12621730",
  password: "1rnvkBZ1Zu",
  port: 3306,
  database: "sql12621730",
});
// sua them cho nay nhe
if (!db) {
  console.log("Lỗi Rồi");
}

module.exports = db;
