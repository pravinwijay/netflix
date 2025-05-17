import mysql from "mysql2/promise";

export async function getConnection() {
  return await mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "netflix"
  });
}