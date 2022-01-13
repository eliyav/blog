const express = require("express");
const path = require("path");
const app = express();
const posts = require("./posts.json");

//Activate Server
const port = 3000;
// const port = process.env.PORT || 3000;
// app.use(express.static(path.join(__dirname, "dist")));

// app.get("*", (_req, res) => {
//   res.sendFile(path.join(__dirname, "dist/index.html"));
// });

app.get("/api/posts", (req, res) => {
  console.log("Request Received");
  res.json(posts);
});

const server = app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
