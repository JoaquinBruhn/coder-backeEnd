const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 8080;

class Productos {
  constructor(fileName) {
    this.fileName = fileName + ".txt";
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

  async edit(numb, newObj) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const products = JSON.parse(content);
      const prodId = products.findIndex((prod) => prod.id == numb);
      if (prodId < 0) {
        throw new Error("Product does not exist");
      }

      const updatedProd = {
        title: newObj.title ? newObj.title : products[prodId].title,
        price: newObj.price ? newObj.price : products[prodId].price,
        thumbnail: newObj.thumbnail ? newObj.thumbnail : products[prodId].thumbnail,
        id: products[prodId].id,
      };
      console.log(updatedProd);
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

const prods = new Productos("desafio");

app.get("/products", (req, res) => {
  prods
    .getAll()
    .then((respuesta) => {
      res.send(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/product/:id", (req, res) => {
  prods
    .getById(req.params.id)
    .then((respuesta) => {
      res.send(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/productRandom", (req, res) => {
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

app.put("/product/:id", (req, res) => {
  console.log(req.body);
  prods
    .edit(req.params.id, req.body)
    // .then((respuesta) => {
    //   res.send(respuesta);
    // })
    .catch((err) => {
      console.log(err);
    });
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port number ${PORT}`);
});
server.on("error", (error) => console.log(`Error on the server${error}`));
