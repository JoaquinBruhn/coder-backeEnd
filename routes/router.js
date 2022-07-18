const express = require("express");
const { Router } = express;

const Productos = require("../classes/products");

const productosRouter = new Router();

const prods = new Productos("desafio");

productosRouter.get("/products", (req, res) => {
  prods
    .getAll()
    .then((respuesta) => {
      res.send(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});
productosRouter.get("/products/:id", (req, res) => {
  prods
    .getById(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

productosRouter.post("/products", (req, res) => {
  prods
    .save(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

productosRouter.put("/products/:id", (req, res) => {
  prods
    .edit(req.params.id, req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

productosRouter.delete("/products/:id", (req, res) => {
  prods
    .deleteById(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = productosRouter;
