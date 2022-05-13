const express = require("express");
const mysql = require("mysql2");

const port = 3000;
const app = express();

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bookstore",
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

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

app.get("/api/books", (req, res) => {
  const { category, publisher, plt, pgt } = req.query;
  let parameters = [];
  let parameterValues = [];

  if (category || publisher || plt || pgt) {
    if (category) {
      parameters.push("cate_id = ?");
      parameterValues.push(category);
    }
    if (publisher) {
      parameters.push("pub_name = ?");
      parameterValues.push(publisher);
    }
    if (plt) {
      parameters.push("book_price < ?");
      parameterValues.push(plt);
    }
    if (pgt) {
      parameters.push("book_price > ?");
      parameterValues.push(pgt);
    }
  }

  let query = "SELECT * FROM book_mast";
  if (parameters.length > 0) {
    query += " WHERE " + parameters.join(" AND ");
  }
  console.log(query);
  pool.query(query, parameterValues, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send("DB error.");
      return;
    }
    res.send(rows);
  });
});

app.get("/api/books/:id", (req, res) => {
  const id = req.params.id;
  const params = [id];
  pool.query(
    "SELECT * FROM book_mast WHERE book_id = ?",
    params,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("DB error.");
        return;
      }
      res.send(rows[0]);
    }
  );
});

app.post("/api/books", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  if (!id || !title) {
    res.status(400).send();
    return;
  }
  pool.query(
    "INSERT INTO book_mast (book_id, book_name) VALUES (?,?)",
    [id, title],
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send("DB error.");
        return;
      }
      res.send("Succes");
    }
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
