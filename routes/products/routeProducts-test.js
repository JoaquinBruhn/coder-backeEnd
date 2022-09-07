const express = require("express");
const { Router } = express;
const { faker } = require("@faker-js/faker");

const productosTest = new Router();

let id = 1;

productosTest.get("/", async (req, res) => {
  try {
    const products = [];
    for (let i = 0; i < 5; i++) {
      const prod = {
        id: id++,
        title: faker.vehicle.bicycle(),
        price: faker.commerce.price(100, 200, 0, "$"),
        thumbnail: faker.image.transport(),
      };
      products.push(prod);
    }
    console.log(products);
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = productosTest;
