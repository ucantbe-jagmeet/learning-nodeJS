const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");

  if (req.url == "/") {
    res.statusCode = 200;

    res.end("<h1>This is NodeJs Tutorial</h1> ");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is About section</h1> ");
  } else {
    res.statusCode = 404;
    res.end("<h1>The Page was not found on server</h1> ");
  }
});

server.listen(port, () => {
  console.log(` Server is Listening on ${port}`);
});
