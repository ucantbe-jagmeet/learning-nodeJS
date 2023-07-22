const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
require("dotenv").config();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">products route</a> ');
});

app.use("/api/v1/products", productsRouter);

// products route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 3000;

const start = async () => {
  try {
    // connect to db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port : ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
