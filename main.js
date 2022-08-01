const express = require("express");
const app = express();
const productosRouter = require("./routes/router");
const handlebars = require("express-handlebars");
const PORT = 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", productosRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});

server.on("error", (error) => console.log(`Error on the server${error}`));
