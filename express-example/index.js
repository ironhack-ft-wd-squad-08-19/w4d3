const express = require("express");

const app = express();

app.use(express.static("public")); // refers to the folder where our static files are

// express method
app.get("/", (request, response) => {
  response.send("<h1>Hello</h1> <h6>World!</h6>"); // express method
});

app.get("/about", (request, response) => {
  //   response.send("This is the about page");
  response.sendFile(`${__dirname}/views/about.html`);
});

app.listen(3005, () => {
  console.log("Server listening on port: 3005");
});
