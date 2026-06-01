const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Thequang123@",
  database: "blogweb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const db = pool.promise();

pool.getConnection((err, connection) => {
  if (err) {
    console.error(" Kết nối Database thất bại:", err.message);
  } else {
    console.log(" Kết nối Database thành công!");
    connection.release();
  }
});

module.exports = db;
