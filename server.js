const express = require("express");
const app = express();
const posts = require("./posts.json");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  },
});

const port = 3000;

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/posts", (req, res) => {
  console.log("Request Received");
  res.json(posts);
});

app.post("/create-post", upload.single("image"), (req, res) => {
  console.log("Image Upload Requested");
  fs.writeFileSync(`./uploads/blog-logo.png`, req.file.buffer);
  res.json({
    success: 1,
    file: {
      url: "/uploads/blog-logo",
      // ... and any additional fields you want to store, such as width, height, color, extension, etc
    },
  });
});

app.get("/uploads/blog-logo", (req, res) => {
  res.sendFile("/projects/blog/uploads/blog-logo.png");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
