const fs = require("fs");

class Carritos {
  constructor(fileName) {
    this.fileName = "./data/" + fileName + ".txt";
  }

  async getById(numb) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const data = JSON.parse(content);
      const product = data.find((el) => el.id == numb);
      if (product) {
        return product;
      } else {
        throw new Object({ error: "Cart does not exist" });
      }
    } catch (error) {
      return error;
    }
  }

  async create() {
    try {
      let content = await fs.promises.readFile(this.fileName, "utf8");
      if (content == "") {
        fs.writeFileSync(this.fileName, "[]");
        content = "[]";
      }
      const data = JSON.parse(content);
      const time = timestamp();
      if (data.length > 0) {
        data.push({ products: [], id: data[data.length - 1].id + 1, timestamp: time });
      } else {
        data.push({ products: [], id: 1, timestamp: time });
      }
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2));
      return data[data.length - 1].id;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(numb) {
    try {
      const content = await fs.promises.readFile(this.fileName, "utf-8");
      const carts = JSON.parse(content);
      const data = carts.filter((el) => {
        return el.id != numb;
      });
      fs.writeFileSync(this.fileName, JSON.stringify(data, null, 2));
      return "Deleted the cart";
    } catch (error) {
      console.log(error);
    }
  }
  deleteAll() {
    try {
      fs.writeFileSync(this.fileName, "[]");
      return "File was emptied";
    } catch (error) {
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

const carts = new Carritos("carritos");

module.exports = { carts };
