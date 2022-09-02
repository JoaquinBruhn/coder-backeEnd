const mongoose = require("mongoose");
const MongodbContainer = require("../../containers/mongodbContainer");

class MongodbDaoProduct extends MongodbContainer {
  constructor(schema) {
    super(schema);
  }

  async save(obj) {
    try {
      const time = timestamp();
      const newProduct = new this.schema({ ...obj, timestamp: time });
      await newProduct.save();
      mongoose.disconnect();
      return newProduct;
    } catch (error) {
      mongoose.disconnect();
      console.log(error);
    }
  }
  async edit(id, newProd) {
    try {
      const updatedProd = await this.schema.findByIdAndUpdate(id, { ...newProd, timestamp: timestamp() });
      mongoose.disconnect();
      return updatedProd;
    } catch (error) {
      mongoose.disconnect();
      console.log(error);
      return error;
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

module.exports = MongodbDaoProduct;
