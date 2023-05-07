// path module
const path = require("path");

// console.log(path.sep);

const filePath = path.join("./content", "subFolder", "text.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// path.resolve - combine all the path
console.log(absolute);

// path. join() simply concatenates segments and its return may or may not result in an absolute path.
// path. resolve() always returns an absolute path, using the target operating system's root as the root or first argument with a leading / as the new root.
