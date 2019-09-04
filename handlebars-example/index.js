const express = require("express");
// const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
// app.set("views", `${__dirname}/myViews`); // allows us to change the directory where the views (*.hbs) are stored

app.get("/", (request, response) => {
  // res.write() .end()
  // res.send() // express
  // res.sendFile() // express
  response.render("homepage", {
    name: "John Doe",
    myText: "lorem ipsum dolor sit amet"
  });
});

app.get("/about", (request, response) => {
  response.render("aboutpage");
});

app.listen(3005);
