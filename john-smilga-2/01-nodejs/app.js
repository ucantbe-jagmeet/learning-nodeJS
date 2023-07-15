const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big.txt");

// stream usually read the large file into small chunks
// default 64kb
// last buffer - remainder
// highWaterMark - control size
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
// const stream = createReadStream("./content/big.txt", { encoding: "utf8" });

stream.on("data", (result) => {
  console.log(result.length);
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
