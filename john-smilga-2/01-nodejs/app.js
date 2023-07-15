const { createReadStream } = require("fs");

// stream usually read the large file into small chunks

const stream = createReadStream("./content/big.txt");

stream.on("data", (result) => {
  console.log(result.length);
});
