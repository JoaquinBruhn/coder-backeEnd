const dotenv = require("dotenv");
dotenv.config();

let prodsDB;
let cartsDB;

switch (process.env.PERS) {
  case "memory":
    const MemoryDaoProducts = require("./products/memoryDaoProducts.js");
    const MemoryDaoCarts = require("./carts/memoryDaoCarts.js");

    let prodsArr = [];
    let cartArr = [];

    prodsDB = new MemoryDaoProducts(prodsArr);
    cartsDB = new MemoryDaoCarts(cartArr);

    break;
  case "files":
    const FileDaoProducts = require("./products/fileDaoProducts.js");
    const FileDaoCarts = require("./carts/fileDaoCarts.js");

    prodsDB = new FileDaoProducts("products");
    cartsDB = new FileDaoCarts("carts");
    break;

  case "firebase":
    const FirebaseDaoProducts = require("./products/firebaseDaoProducts.js");
    const FirebaseDaoCarts = require("./carts/firebaseDaoCarts.js");

    prodsDB = new FirebaseDaoProducts("products");
    cartsDB = new FirebaseDaoCarts("carts");
    break;

  case "mongo":
    const MongoDaoProducts = require("./products/mongodbDaoProducts.js");
    const MongoDaoCarts = require("./carts/mongodbDaoCarts.js");
    const Product = require("../modals/mongoProductModal.js");
    const Cart = require("../modals/mongoCartModal.js");

    prodsDB = new MongoDaoProducts(Product);
    cartsDB = new MongoDaoCarts(Cart);

    break;
  default:
    break;
}

module.exports = { cartsDB, prodsDB };
