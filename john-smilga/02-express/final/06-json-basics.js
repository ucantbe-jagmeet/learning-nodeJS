// when we tak about API, we mean setting up HTTP interface to interact with our data
// data is sent using JSON

const express = require("express");
const app = express();
const { products } = require("../data");

app.get("/", (req, res) => {
  // res.status(500).json([
  // {
  // error: "message",
  // },
  // {
  // user: { name: "ucantbe - Jagmeet", rollno: "19124027" },
  // },
  // ]);

  res.json(products);
});

app.listen(5000, () => {
  console.log(`Server is Listening on Port 5000...`);
});
