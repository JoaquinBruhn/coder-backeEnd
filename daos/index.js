const FileDaoCarts = require("./carts/fileDaoCarts");

const cartsDB = new FileDaoCarts("carritos");

module.exports = { cartsDB };
