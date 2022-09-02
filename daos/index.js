// const FileDaoCarts = require("./carts/fileDaoCarts");
// const FileDaoProducts = require("./products/fileDaoProducts");

// const cartsDB = new FileDaoCarts("carts");
// const prodsDB = new FileDaoProducts("products");

const Product = require("../modals/mongoProductModal");
const MongodbContainer = require("../containers/mongodbContainer");

const prodsDB = new MongodbContainer(Product);

module.exports = { cartsDB, prodsDB };
