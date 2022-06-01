const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded());

app.post("/signup", (req, res) => {
  const { username, email } = req.body;

  if (username && email) {
    res.status(200).send(`
    <h1>Thanks ${username}, we will send updates to ${email}</h1>`);
  } else {
    res.status(400).send(`
    <h1>Bad request</h1>`);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
