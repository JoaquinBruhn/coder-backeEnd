// const http = require("http");

// const server = http.createServer((peticion, respuesta) => {
//   let time = new Date().getHours();
//   let message = "buenos dias";
//   if (13 <= time <= 19) message = "buenas tardes";
//   if (20 <= time || 6 > time) message = "buenas noches";
//   respuesta.end(message);
// });

// const connectedServer = server.listen(8080, () => {
//   console.log(`Listening on port number ${connectedServer.address().port}`);
// });

//((((((((((((((((((((((((((()))))))))))))))))))))))))))

// const express = require("express");
// const app = express();

// const PORT = 8080;

// app.get("/", (req, res) => {
//   res.send({ key: "value" });
// });

// let visitas = 0;
// app.get("/visitas", (req, res) => {
//   ++visitas;
//   res.send("Visitas totales: " + visitas);
// });

// app.get("/fyh", (req, res) => {
//   let date = new Date().toLocaleString();
//   res.send(date);
// });

// const server = app.listen(PORT, () => {
//   console.log(`Listening on port number ${PORT}`);
// });
// server.on("error", (error) => console.log(`Error on the server${error}`));

//(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 8080;

class Contenedor {
  constructor(fileName) {
    this.fileName = fileName + ".txt";
  }

  async save(obj) {
    try {
      let content = await fs.promises.readFile(this.fileName, "utf8");
      if (content == "") {
        fs.writeFileSync(this.fileName, "[]");
        content = "[]";
      }
      const data = JSON.parse(content);
      if (data.length > 0) {
        data.push({ ...obj, id: data[data.length - 1].id + 1 });
      } else {
        data.push({ ...obj, id: 1 });
      }
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2));
      console.log(data[data.length - 1].id);
      return data[data.length - 1].id;
    } catch (error) {
      console.log(error);
    }
  }
  async getById(numb) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const data = JSON.parse(content);
      const product = data.find((el) => el.id == numb);
      console.log(product);
      return product;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const data = JSON.parse(content);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteById(numb) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const products = JSON.parse(content);
      const data = products.filter((el) => {
        return el.id != numb;
      });
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error);
    }
  }
  deleteAll() {
    try {
      fs.writeFileSync(this.fileName, "[]");
    } catch (error) {
      console.log(error);
    }
  }
}

const prods = new Contenedor("desafio");

app.get("/productos", (req, res) => {
  prods
    .getAll()
    .then((respuesta) => {
      res.send(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/productoRandom", (req, res) => {
  prods
    .getAll()
    .then((allProds) => {
      let rdmId = Math.floor(Math.random() * allProds.length);
      console.log(rdmId);
      res.send(allProds[rdmId]);
    })
    .catch((err) => {
      console.log(err);
    });
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});
server.on("error", (error) => console.log(`Error on the server${error}`));
