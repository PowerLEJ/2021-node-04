// const mysql = require('mysql2') // 콜백 버전
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
// 	password: process.env.DB_PASS,
//   database: process.env.DB_NAME
// });

const mysql = require('mysql2/promise') // aysic, await 프로미스 버전
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
	password: process.env.DB_PASS,
  database: process.env.DB_NAME,
	waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = { mysql, pool }