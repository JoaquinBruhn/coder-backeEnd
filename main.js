const express = require("express");
const app = express();

const productosRouter = require("./routes/router");

app.use(express.static("public"));

const PORT = 8080;

app.use(productosRouter);

const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});

server.on("error", (error) => console.log(`Error on the server${error}`));
