const express = require("express");
const mysql = require("mysql2");

const port = 3000;

const app = express();

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todo_app",
});

conn.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connection established");
  }
});

app.use(express.static("public"));
app.use(express.json());

app.get("/api/todos", (req, res) => {
  conn.query("SELECT * FROM todos", (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: err.sqlMessage });
      return;
    }
    res.send(rows);
  });
});

// {
//     "id": 1,
//     "completed": 0, <- nem false, hanem 0 van a respone-ban. Ez így jó?
//     "text": "Buy milk"
// },

app.post("/api/todos", (req, res) => {
  if (!req.body.text) {
    res.status(400).send({ message: "Missing title" });
    return;
  }

  const query1 = `SELECT * FROM todos WHERE text = ?`;
  const params = [req.body.text];

  conn.query(query1, params, (err1, rows) => {
    if (err1) {
      console.error(err1);
      res.status(500).send({ message: err1.sqlMessage });
      return;
    }

    if (rows.length > 0) {
      res.status(400).send({ message: "Todo is already in list!" });
      return;
    }

    const query2 = `INSERT INTO todos (text) VALUES (?)`;

    conn.query(query2, params, (err2, result) => {
      if (err2) {
        console.error(err2);
        res.status(500).send({ message: err2.sqlMessage });
        return;
      }

      if (req.body.text.length < 3) {
        res.status(400).send({ message: "Invalid todo" });
        return;
      }

      const data = {
        id: result.insertId,
        completed: req.body.completed,
        text: req.body.text,
      };
      res.status(201).send(data);
    });
  });
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || isNaN(id)) {
    res.status(404).send({ message: "Not found" });
    return;
  }

  const query1 = `UPDATE todos SET text = ?, completed = ? WHERE id = ?`;
  const params = [req.body.text, req.body.completed, id];

  conn.query(query1, params, (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send({ message: err.sqlMessage });
    }
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: "Not found" });
    }
    conn.query(`SELECT * from todos WHERE id = ?`, [id], (err, rows) => {
      if (err) {
        console.log(err.message);
        return res.status(500).send({ message: err.sqlMessage });
      }

      if (rows.length === 0) {
        // Someone has deleted the post since the update
        res.status(410).send({ message: "Gone" });
        return;
      }

      res.send(rows[0]);
    });
  });
});

//{"text": "Buy eggs and sugar", "completed": true}
//Ha ezt küldöm, átállítja completed: 1-re. Ez így jó?

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (!id || isNaN(id)) {
    res.status(404).send({ message: "Not found" });
    return;
  }

  const query1 = `SELECT * FROM todos WHERE id = ?`;
  const params = [id];

  conn.query(query1, params, (err1, rows) => {
    if (err1) {
      console.error(err1);
      res.status(500).send({ message: err1.sqlMessage });
      return;
    }
    if (rows.length === 0) {
      res.status(404).send({ message: "Not found" });
      return;
    }

    const query2 = `DELETE FROM todos WHERE id = ?`;
    conn.query(query2, params, (err2) => {
      if (err2) {
        console.error(err2);
        res.status(500).send({ message: err2.sqlMessage });
        return;
      }

      res.status(204).send();
    });
  });
});

// Filter GET /todos
// List only the completed todo items.
app.get("/api/todos", (req, res) => {
  //http://localhost:3000/api/todos/?completed=1
  const params = [req.query.completed || "%"];
  conn.query(
    "SELECT * FROM todos WHERE completed LIKE ?",
    params,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: err.sqlMessage });
        return;
      }
      res.send(rows);
    }
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
