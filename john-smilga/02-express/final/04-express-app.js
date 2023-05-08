const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   // res.send("HII there");
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//   adding to static assets
//   SSR
// });

app.all("*", (req, res) => {
  res.status(400).send("Resource Not Found");
});

app.listen(5000, () => {
  console.log(`server is listening on port 5000...`);
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen