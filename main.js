const express = require("express");
const app = express();
const productosRouter = require("./routes/router");
const handlebars = require("express-handlebars");
const PORT = 8080;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", productosRouter);

//((((((((((((((((( HANDLEBARS )))))))))))))))))

app.set("view engine", "hbs");
app.set("views", "./views/pages/handlebars/");
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/pages",
    partialsDir: __dirname + "/view/partials",
  })
);

const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});

server.on("error", (error) => console.log(`Error on the server${error}`));
