const http = require("http");

const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  let url = req.url;
  console.log(url);
  //home
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // Styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  // browser app
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/js" });
    res.write(homeLogic);
    res.end();
  }
  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  // 404 page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h2>Resource Not Found</h2>`);
    res.end();
  }
});

server.listen(5000);
// port is a communication end point
