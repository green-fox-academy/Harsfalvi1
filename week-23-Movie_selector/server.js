const express = require("express");
const mysql = require("mysql2");

const port = 3000;
const app = express();

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "movieselector",
});

pool.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connection established");
  }
});

app.use(express.json());

app.use(express.static("public"));

app.get("/api/genres", (req, res) => {
  pool.query("SELECT * FROM genres", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("DB error.");
      return;
    }
    res.send({ genres: rows });
  });
});

app.get("/api/movies", (req, res) => {
  const params = [req.query.genre_id || "%"];
  //http://localhost:3000/api/movies/?genre_id=1
  pool.query(
    "SELECT * FROM movies WHERE genres_id LIKE ?",
    params,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("DB error.");
        return;
      }
      res.send({ movies: rows });
    }
  );
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
