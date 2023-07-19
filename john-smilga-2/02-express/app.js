const express = require("express");
const app = express();
const logger = require("./logger");
// req => middleware => res

// app.use(logger);
app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

// app.use(logger);

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
