const express = require("express");
const mysql = require("mysql2");

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("public"));

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "reddit",
});

app.get("/hello", (req, res) => {
  res.send("hello word");
});

pool.connect((err) => {
  if (err) {
    console.log("Cannot connect to the db", err);
    return;
  }
  pool.query(
    `CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), url VARCHAR(255), timestamp INT, score INT DEFAULT 0, owner VARCHAR(50), vote INT DEFAULT 0)`
  );
  console.log("Connection established");
});

app.get("/", function (req, res) {
  res.send(req.headers);
});

app.get("/posts", (req, res) => {
  conn.query("SELECT * FROM posts", (err, posts) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err);
    }
    return res.send(posts);
  });
});

app.post("/posts", (req, res) => {
  const post = req.body;
  const userName = req.headers.username;
  conn.query(
    `INSERT INTO posts (title, url, timestamp, owner) VALUE (?,?, ?, ?)`,
    [post.title, post.url, Date.now(), userName],
    (err, result) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send(err);
      }
      conn.query(
        `SELECT * FROM posts WHERE id=?`,
        result.insertId,
        (err, result) => {
          if (err) {
            console.log(err.message);
            return res.status(500).send(err);
          }
          return res.send({ post: result });
        }
      );
    }
  );
});
const defaultScore = 0;

app.post("/posts2", (req, res) => {
  const data = {
    title: req.body.title,
    url: req.body.url,
    timestamp: Date.now(),
  };

  // Validation
  if (!data.title) {
    res.status(400).send({ message: "missing title" });
    return;
  }
  if (!data.url || !data.url.includes(":")) {
    res.status(400).send({ message: "missing or invalid URL" });
    return;
  }

  const query = `INSERT INTO posts (title, url, timestamp) VALUES (?, ?, ?)`;
  const params = [data.title, data.url, data.timestamp];

  pool.query(query, params, (error, result) => {
    if (error) {
      res.status(500).send({ message: "DB error" });
      return;
    }
    res.status(201).send({
      id: result.insertId,
      score: defaultScore,
      ...data,
    });
  });
});

app.put("/posts/:id/upvote", (req, res) => {
  const { id } = req.params;
  if (isNaN(+id)) {
    return res.status(400).send({
      error: "Id number error",
    });
  }
  const query1 = `UPDATE posts SET score = score+1, vote = vote+1 WHERE id = ?`;

  conn.query(query1, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send("Post not found");
    }
    conn.query(`SELECT * from posts WHERE id = ?`, [id], (err, post) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send(err);
      }
      return res.status(200).send(post);
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});
