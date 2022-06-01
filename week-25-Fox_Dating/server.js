const express = require("express");
const mysql = require("mysql2");

const port = 3000;
const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "profiles",
});

conn.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connection established");
  }
});

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

app.get("/profiles/:username", (req, res) => {
  res.sendFile(__dirname + `/public/profiles.html`);
});

app.get("/match/:username", (req, res) => {
  res.sendFile(__dirname + `/public/match.html`);
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  conn.query(
    "SELECT * FROM users WHERE username = ?",
    [req.body.username],
    (error, rows) => {
      //SELECT: rows-t érdemes, mivel a result egy array sorokkal
      console.log(rows);
      if (error) {
        res.status(500).send("DB error.");
        return;
      }
      if (rows.length !== 0) {
        return res.status(400).send("Your username is already exits");
      }

      const params = [
        req.body.username,
        req.body.nickname,
        req.body.birth_year,
        req.body.gender,
        req.body.target_gender,
        req.body.self_description,
        req.body.profile_picture_url,
      ];

      conn.query(
        "INSERT INTO users (username, nickname, birth_year, gender, target_gender, self_description, profile_picture_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
        params,
        (err, result) => {
          console.log("result: " + result);
          if (err) {
            console.log(err);
            res.status(500).send("DB error.");
            return;
          }

          res.status(201).send("Succesful registration!");
        }
      );
    }
  );
});

app.get("/api/users/:username", (req, res) => {
  const params = req.params.username;
  conn.query(`SELECT * from users WHERE username = ?`, params, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("DB error.");
      return;
    }
    if (rows.length === 0) {
      return res.status(404).send();
    }
    console.log(rows[0]);

    const age = new Date().getFullYear() - Number(rows[0].birth_year);
    console.log(age);
    console.log(rows[0].birth_year);

    res.status(200).send({
      username: rows[0].username,
      nickname: rows[0].nickname,
      age: age,
      gender: rows[0].gender,
      target_gender: rows[0].target_gender,
      self_description: rows[0].self_description,
      profile_picture_url: rows[0].profile_picture_url,
    });
  });
});

app.get("/api/random-user", (req, res) => {
  conn.query(`SELECT * FROM users ORDER BY RAND() LIMIT 1 `, (err, rows) => {
    console.log("rows " + rows);
    if (err) {
      console.log(err);
      res.status(500).send("DB error.");
      return;
    }

    console.log("Result " + [rows[0]]);

    const age = new Date().getFullYear() - Number(rows[0].birth_year);
    console.log("age " + age);
    console.log(rows[0].birth_year);

    res.status(200).send({
      username: rows[0].username,
      nickname: rows[0].nickname,
      age: age,
      gender: rows[0].gender,
      target_gender: rows[0].target_gender,
      self_description: rows[0].self_description,
      profile_picture_url: rows[0].profile_picture_url,
    });
  });
});

app.post("/api/likes", (req, res) => {
  const params = [req.body.source_username, req.body.target_username];

  conn.query(
    `SELECT * FROM LIKES WHERE target_username = ? AND source_username = ?`,
    params,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("DB error.");
        return;
      }
      conn.query(
        `INSERT INTO likes (source_username, target_username) VALUES (?, ?)`,
        params,
        (err, rows) => {
          if (err) {
            console.log(err);
            res.status(500).send("DB error.");
            return;
          }
          res.status(201).send;
        }
      );
      if (rows.length === 0) {
        return res.status(201).send({ matched: false });
      }
      return res.status(201).send({ matched: true });
    }
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
