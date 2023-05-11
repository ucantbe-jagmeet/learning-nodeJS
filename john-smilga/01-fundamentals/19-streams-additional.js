const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big.txt");

// Default 64kb
// Last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./content/big.txt", { highWaterMark: 240000 });
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 240000,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});

// stream.on("error", (err) => {
//   console.log(err);
// });
