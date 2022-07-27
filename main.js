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

// app.set("view Emgine", "hbs");
// app.set("views", "./views");
// app.engine(
//   "hbs",
//   handlebars.engine({
//     extname: ".hbs",
//     layoutsDir: __dirname + "/public/layouts",
//   })
// );

//((((((((((((((((((( PUG )))))))))))))))))))

// app.set("views", "./views/pug");
// app.set("view engine", "pug");

//(((((((((((((((((((( EJS ))))))))))))))))))))

app.set("view engine", "ejs");

app.get("/pages/ejs", (req, res) => {
  res.render("products", { title: "Tituloco" });
});
const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});

server.on("error", (error) => console.log(`Error on the server${error}`));
// const express = require("express");
// const app = express();
// app.set("view engine", "ejs");
// app.get("/datos", (req, res) => {
//   const { min, max, nivel, titulo } = req.query;
//   res.render("datos", { min, max, nivel, titulo });
// });
// app.listen(8080, () => {
//   console.log("Server up");
// });
