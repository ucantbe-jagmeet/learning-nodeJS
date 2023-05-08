// Each MiddleWare function has access to request and response object

const express = require("express");
const app = express();
const logger = require("../logger");
// req => middleware => res

// app.use("/api", logger); -> this will apply to both products and items
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
