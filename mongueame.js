const mongoose = require("mongoose");
const Product = require("./modals/mongoProductModal");
const MongodbDaoProduct = require("./daos/products/mongodbDaoProducts");
const express = require("express");
const app = express();

// CRUD();

// async function CRUD() {
//   try {
//     mongoose.connect("mongodb+srv://joaco:admin1@coder-backend.jyd2rnt.mongodb.net/?retryWrites=true&w=majority");
//     console.log("connected to mongoDB");
//     const product = {
//       title: "Lapiz",
//       price: 13,
//       thumbnail:
//         "https://media.istockphoto.com/id/815950992/es/foto/l%C3%A1piz.webp?s=612x612&w=is&k=20&c=Hzj7A-P8Q1WkZvsMbNPdQXwYLEMeLzNWQyNCg1YIj0U=",
//       stock: 5,
//       description: "This is the product",
//       timestamp: "(08/03/2022 - 19:56:26)",
//     };

//     const newProduct = new Product(product);
//     await newProduct.save();
//     console.log(newProduct);
//     mongoose.disconnect();
//   } catch (error) {
//     console.log(error);
//     mongoose.disconnect();
//   }
// }

// const productUpdate = {
//   price: 71,
//   description: "This product´s description is different",
// };

const product = {
  title: "Lapiz",
  price: 13,
  thumbnail:
    "https://media.istockphoto.com/id/815950992/es/foto/l%C3%A1piz.webp?s=612x612&w=is&k=20&c=Hzj7A-P8Q1WkZvsMbNPdQXwYLEMeLzNWQyNCg1YIj0U=",
  stock: 5,
  description: "This is the product",
  timestamp: "(08/03/2022 - 19:56:26)",
};

app.get("/products", async (req, res) => {
  try {
    const prodsDB = new MongodbDaoProduct(Product);
    const response = await prodsDB.save(product);
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
