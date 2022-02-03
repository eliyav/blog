const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);
const posts = require("./src/posts.json");

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler));

const port = process.env.PORT || 3000;

app.get("/api/posts", (req, res) => {
  console.log("Request Received");
  res.json(posts);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started port: ${port}`);
  }
});
