const mongoose = require("mongoose");
const MongodbContainer = require("../../containers/mongodbContainer.js");
const Product = require("../../modals/mongoProductModal.js");
const Cart = require("../../modals/mongoCartModal.js");
const MONGOKEY = process.env.MONGOKEY;
mongoose.connect(MONGOKEY);

class MongodbDaoCarts extends MongodbContainer {
  constructor(schema) {
    super(schema);
  }

  async getAllInCart(cartId) {
    try {
      const searchResult = await this.schema.findById(cartId, { products: 1 });
      return searchResult;
    } catch (error) {
      console.log(error);
    }
  }

  async makePurchase(cartId) {
    try {
      const purchase = await this.schema.findById(cartId, { products: 1 });
      await this.schema.findByIdAndUpdate(cartId, {
        products: [],
        timestamp: timestamp(),
      });
      return purchase.products;
    } catch (error) {
      console.log(error);
    }
  }

  async createCart() {
    try {
      const time = timestamp();
      const newCart = new this.schema({ timestamp: time, products: [] });
      await newCart.save();
      return newCart;
    } catch (error) {
      console.log(error);
    }
  }

  async addProduct(cartId, prodId) {
    try {
      const productSearcher = new MongodbContainer(Product);
      const prodToAdd = await productSearcher.getById(prodId);
      if (prodToAdd) {
        await this.schema.findByIdAndUpdate(cartId, { $push: { products: prodToAdd } });
        const cartSearcher = new MongodbContainer(Cart);
        await cartSearcher.getById(cartId);
        return prodToAdd;
      } else {
        throw new Object({ error: "Product does not exist" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async removeProduct(cartId, prodId) {
    try {
      const currentCart = await this.schema.findById(cartId);
      const indexProduct = currentCart.products.findIndex((el) => el._id == prodId);
      currentCart.products.splice(indexProduct, 1);
      await this.schema.findByIdAndUpdate(cartId, {
        products: currentCart.products,
        timestamp: timestamp(),
      });
      return "Success, product removed";
    } catch (error) {
      console.log(error);
    }
  }
}

function timestamp() {
  var date = new Date();
  var dateStr =
    "(" +
    ("00" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("00" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear() +
    " - " +
    ("00" + date.getHours()).slice(-2) +
    ":" +
    ("00" + date.getMinutes()).slice(-2) +
    ":" +
    ("00" + date.getSeconds()).slice(-2) +
    ")";

  return dateStr;
}

module.exports = MongodbDaoCarts;
