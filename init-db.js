const mysql = require("mysql2");

// Tạo cấu hình kết nối đến MySQL
const pool = mysql.createPool({
  host: "localhost", // Thường là localhost
  user: "root", // Username mặc định của MySQL
  password: "Thequang123@", // Mật khẩu MySQL của bạn (nếu không có thì để trống '')
  database: "blogweb", // Tên database bạn vừa tạo ở file SQL
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
    connection.release(); // Trả lại kết nối vào pool
  }
});

module.exports = db;
