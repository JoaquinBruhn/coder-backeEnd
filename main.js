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
// app.set("views", "./public/views/");
// app.engine(
//   "hbs",
//   handlebars.engine({
//     extname: ".hbs",
//     layoutsDir: "/public/view/pages/handlebars",
//     partialsDir: "/public/view/partials/handlebars",
//   })
// );

//((((((((((((((((((( PUG )))))))))))))))))))

// app.set("view engine", "pug");
// app.set("views", "./public/views/");

//(((((((((((((((((((( EJS ))))))))))))))))))))
app.set("view engine", "ejs");
app.set("views", "./public/views/pages/ejs/");

const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});

server.on("error", (error) => console.log(`Error on the server${error}`));
