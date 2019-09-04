const express = require("express");

const app = express();

// express method
app.get("/", (request, response) => {
  response.send("<h1>Hello</h1> <h6>World!</h6>"); // express method
});

app.get("/about", (request, response) => {
  //   response.send("This is the about page");
  console.log(__dirname);
  response.sendFile(`${__dirname}/views/about.html`);
});

app.listen(3005, () => {
  console.log("Server listening on port: 3005");
});
