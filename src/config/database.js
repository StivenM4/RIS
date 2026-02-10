import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "TU_PASSWORD",
  database: "ris_db",
  waitForConnections: true,
  connectionLimit: 10
});
