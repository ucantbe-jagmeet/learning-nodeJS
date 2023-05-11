// HTTP
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our home page");
    return;
  }

  if (request.url === "/about") {
    response.end("Welcome to our about page");
    return;
  }

  response.end(`<h1>Oops...</h1>
  <p> We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
