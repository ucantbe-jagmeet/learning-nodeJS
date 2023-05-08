// Each MiddleWare function has access to request and response object

const express = require("express");
const app = express();
const logger = require("../logger");
const morgan = require("morgan");
const authorize = require("../authorize");
// req => middleware => res

// app.use("/api", logger); -> this will apply to both products and items
// order matters
// 1. use vs route
// 2. options - our own / express / third party (morgan-npm)

// app.use([logger, authorize]);
// app.use(express.static())
app.use(morgan("tiny"));

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
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
