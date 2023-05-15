const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// const a = fs.readFileSync("file.txt");
// console.log(a.toString());
// console.log(a.toString());

// fs.writeFile("file2.txt", "This ais data in file2", () => {
//   console.log("written to the file2");
// });

const b = fs.writeFileSync("file2.txt", "This ais data2 in file2");

console.log(b);

console.log("finished reading file");
