const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "login page",
});

app.get("/", (req, res) => {
  return res.json("From Backend");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM usersinfo";
  db.query(sql, (error, data) => {
    if (error) {
      return res.json(error);
    } else {
      return res.json(data);
    }
  });
});

app.listen("8081");
