const express = require("express");
const app = express();

const PORT = 8080;

app.get("/productos", (req, res) => {
  res.send({ key: "value" });
});

let visitas = 0;
app.get("/productoRandom", (req, res) => {
  ++visitas;
  res.send("Visitas totales: " + visitas);
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});
server.on("error", (error) => console.log(`Error on the server${error}`));
