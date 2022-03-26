const express = require("express");
const app = express();
const port = 3000;

app.use("/assets", express.static(__dirname + "/assets"));

app.listen(port, () => {
  app.use("/assets", express.static(__dirname + "/assets"));
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
