const path = require("path");
const express = require("express");
const app = express(); // create express app

app.use(express.static(path.join(__dirname, "..", "build")));

// start express server on port 3001
app.listen(3001, () => {
  console.log("server started on port 3001");
});