require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">products route</a> ');
});

// products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 3000;

const start = async () => {
  try {
    // connect to db
    await connectDB(process.env.MONOG_URI);
    app.listen(port, console.log(`Server is listening on port : ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
