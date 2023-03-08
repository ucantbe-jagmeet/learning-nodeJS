const url = require("url");

const myURL = new URL("https://example.org");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e"; // get parameter
myURL.port = "8000";
myURL.hash = "#fgh";

console.log(myURL.href);
console.log(myURL);
