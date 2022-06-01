const express = require("express");
const app = express();

app.get("/groot", (req, res) => {
  const message = req.query.message;

  if (!message) {
    return res.status(404).send({ error: "I am Groot!" });
  }
  return res.status(200).send({
    received: message,
    translated: "I am Groot!",
  });
});

module.exports = app;
