const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/favicon.ico") {
    response.end();
    return;
  }

  if (request.url === "/") {
    response.write("Hello world!");
    response.end();
  } else if (request.url === "/about") {
    response.write("This is the about page");
    response.end();
  } else {
    response.write("404 content not found");
    response.end();
  }
});

console.log("Server listening on port 3005");
server.listen(3005);
