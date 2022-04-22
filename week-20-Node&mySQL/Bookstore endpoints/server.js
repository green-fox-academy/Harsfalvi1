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

  if (category || publisher || plt || pgt) {
    let parameters = [];
    let parameterValues = [];

    if (category) {
      parameters.push("category");
      parameterValues.push(category);
    }
    if (publisher) {
      parameters.push("publisher");
      parameterValues.push(publisher);
    }
    if (plt) {
      parameters.push("plt");
      parameterValues.push(plt);
    }
    if (pgt) {
      parameters.push("pgt");
      parameterValues.push(pgt);
    }

    // const query =

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
});
