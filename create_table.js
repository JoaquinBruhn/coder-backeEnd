const { options } = require("./data/knexDB");
const knex = require("knex")(options);
const { prods } = require("./classes/products");
const express = require("express");
const app = express();

//((((((((((((((((((((((((((((((((CREATE TABLE))))))))))))))))))))))))))))))))

// {{{{{PRODUCTS TABLE}}}}}

// const createTableProducts = async () => {
//   await knex.schema
//     .createTable("products", (table) => {
//       table.increments("id");
//       table.string("title");
//       table.integer("price");
//       table.string("thumbnail");
//       table.integer("stock");
//       table.string("code");
//       table.string("description");
//       table.string("timestamp");
//     })
//     .then(() => {
//       console.log("Table products created");
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       knex.destroy();
//     });
// };
// createTableProducts();

// {{{{MESSAGES TABLE}}}}

// const createTableMessages = async () => {
//   await knex.schema
//     .createTable("messages", (table) => {
//       table.increments("id");
//       table.string("email");
//       table.string("text");
//       table.string("timestamp");
//     })
//     .then(() => {
//       console.log("Table messages created");
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       knex.destroy();
//     });
// };

// createTableMessages();

// (((((((((((((((((((((((((((((((((((( INSERT ))))))))))))))))))))))))))))))))))))

// {{{{{INSERT PRODUCTS}}}}}

// const insertProducts = async () => {
//   const prods = [
//     {
//       title: "Hotdog",
//       price: "122",
//       thumbnail:
//         "https://media.istockphoto.com/id/1130731707/es/foto/hot-dog-en-blanco.webp?s=612x612&w=is&k=20&c=-hQtimWj5RhSl8-_vTeKNIVvb2PNEfjSBQCkcu8nAWQ=",
//       code: "#-Cs594",
//       stock: "44",
//       description: "It´s a hot dog, not much to say about it. Comes with some ketchup and mustard",
//       id: 1,
//       timestamp: "(08/08/2022 - 17:33:55)",
//     },
//     {
//       id: 2,
//       title: "Dog",
//       price: 785,
//       thumbnail:
//         "https://media.istockphoto.com/id/1318666271/es/foto/yorkshire-terrier-perro-sobre-fondo-blanco.webp?s=612x612&w=is&k=20&c=u0UCPYF4Qa-MvdCeVgf6YCa806_wSaib_Nnb3vhiJxk=",
//       stock: 32,
//       code: "#-oAJ8S",
//       description: "It´s a hot dog, it says *woof woof*. doesn´t come with some ketchup and mustard.",
//       timestamp: "(08/16/2022 - 17:16:28)",
//     },
//   ];

//   await knex("products")
//     .insert(prods)
//     .then(() => {
//       console.log("Products inserted");
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       knex.destroy();
//     });
// };

// insertProducts();

// {{{{{INSERT MESSAGES}}}}}

// const insertMessages = async () => {
//   const prods = [
//     {
//       email: "test@test.com",
//       text: "Hola",
//       timestamp: "(08/03/2022 - 19:56:26)",
//     },
//   ];

//   await knex("messages")
//     .insert(prods)
//     .then(() => {
//       console.log("Messages inserted");
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       knex.destroy();
//     });
// };

// insertMessages();

// ((((((((((((((((((((((((((((((((((((( GET ALL )))))))))))))))))))))))))))))))))))))

// {{{{{GET PRODUCTS}}}}}

// app.get("/products", (req, res) => {
//   knex
//     .from("products")
//     .select("*")
//     .then((rows) => {
//       res.json(rows);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

// app.listen(3000);

// {{{{{GET MESSAGES}}}}}

// app.get("/messages", (req, res) => {
//   knex
//     .from("messages")
//     .select("*")
//     .then((rows) => {
//       res.json(rows);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

// app.listen(3000);
