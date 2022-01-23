const express = require("express");
const app = express();
const posts = require("./posts.json");

const port = 3000;

app.get("/api/posts", (req, res) => {
  console.log("Request Received");
  res.json(posts);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
