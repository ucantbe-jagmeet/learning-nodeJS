const { readFile, writeFile } = require("fs");

/*


console.log("Started a first task");
// Check file path

readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    
    console.log(result);
    console.log("compiled first task");
});

console.log("Starting next task");

*/

/*
    console.log("first");
    setTimeout(() => {
        console.log("Second");
    }, 0);

    console.log("Third");
*/

setInterval(() => {
  console.log("hello World");
}, 2000);
console.log("I will run first");
