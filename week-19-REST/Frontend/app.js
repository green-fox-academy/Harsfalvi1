const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.use(express.static("assets"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//You should create a logic that can double the provided number.
//Create a GET /doubling endpoint
//It should be able to handle a query parameter called input, eg. http://localhost:8080/doubling?input=15
//This endpoint should respond with a json object with the doubled amount of the input:

app.get("/doubling", (req, res) => {
  const received = parseInt(req.query.input);

  if (!isNaN(received)) {
    const doubled = 2 * received;
    res.send({
      received: received,
      result: doubled,
    });
  } else {
    res.status(200).send({
      error: "Please provide an input!",
    });
  }
});

//You should create a logic that can greet someone by his/her name and title.

//Create a GET /greeter endpoint
//that can receive a query parameter like name=Petike&title=student
//and responds with an awesome greeting json object
app.get("/greeter", (req, res) => {
  const name = req.query.name;
  const title = req.query.title;

  if (!name && !title) {
    res.status(400).send({
      error: "Please provide a name and a title!",
    });
  } else if (!title) {
    res.status(400).send({
      error: "Please provide a title!",
    });
  } else if (!name) {
    res.status(400).send({
      error: "Please provide a name!",
    });
  } else {
    res.send({
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`,
    });
  }
});
//http://localhost:8080/greeter?name=Petike&title=student

//You should create a logic that can receive a string and append an A letter to it.

// Create a dynamic GET /appenda/{appendable} endpoint
// that responds with the appended a:
// eg. /appenda/kuty
// if no appendable is provided, thats a different endpoint -> so the server should respond with 404

app.get("/appenda/:appendable", (req, res) => {
  const { appendable } = req.params;

  if (appendable) {
    res.send({
      appended: appendable + "a",
    });
  } else {
    res.status(404);
  }
});
// http://localhost:8080/appenda/kuty

// http://localhost:8080/appenda/Vicusk

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
