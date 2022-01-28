// all code in this file
const express = require("express");

// little bit of administration work with express js
// add in bodyparser to make sure that wnever user sends in
// json data it actually gets parsed and it's displayed properly
const bodyParser = require("body-parser");

const { randomBytes } = require("crypto");
const req = require("express/lib/request");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
// where we store all posts
const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Listening on 4000...");
});

// last thing todo is to add a script in the package.json file to start this thing up
