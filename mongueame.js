const MemoryContainer = require("./containers/memoryContainer");
const express = require("express");
const app = express();

const cart = {
  timestamp: "(08/09/2022 - 12:19:34)",
  products: [],
};

const product = {
  title: "Lapiz",
  price: 13,
  thumbnail:
    "https://media.istockphoto.com/id/815950992/es/foto/l%C3%A1piz.webp?s=612x612&w=is&k=20&c=Hzj7A-P8Q1WkZvsMbNPdQXwYLEMeLzNWQyNCg1YIj0U=",
  stock: 5,
  description: "This is the product",
  timestamp: "(08/03/2022 - 19:56:26)",
};

const product2 = {
  title: "Hotest dog",
  price: 50,
  stock: 5,
  description: "It´s a hot dog, not much to say about it. Comes with some ketchup and mustard",
};

// app.get("/products", async (req, res) => {
//   try {
//     const prodsDB = new MongodbDaoProduct(Product);
//     const response = await prodsDB.save(product);
//     res.json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).end();
//   }
// });

// app.get("/products", async (req, res) => {
//   try {
//     const cartsDB = new FirebaseDaoCarts("carts");
//     const response = await cartsDB.removeProduct("L4tbYC1pMz45XDO3iWy9", "XrUAHPd90lzjoTt6PaME");
//     res.json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).end();
//   }
// });

let productsArray = [
  {
    title: "Lapiz",
    price: "13",
    thumbnail:
      "https://media.istockphoto.com/id/815950992/es/foto/l%C3%A1piz.webp?s=612x612&w=is&k=20&c=Hzj7A-P8Q1WkZvsMbNPdQXwYLEMeLzNWQyNCg1YIj0U=",
    id: 4,
    stock: 5,
    description: "This is the product",
    timestamp: "(08/03/2022 - 19:56:26)",
  },
];

app.get("/products", async (req, res) => {
  try {
    const prodsDB = new MemoryContainer(productsArray);
    const response = await prodsDB.getAll();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
