const { options } = require("./data/mariaDB");
const knex = require("knex")(options);
const { prods } = require("./classes/products");
const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  knex
    .from("products")
    .select("*")
    .orderBy("id", "desc")
    .then((rows) => {
      res.json(rows);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

app.listen(3000);

// (((((((((((((((((((((((((((((((((((( INSERT ))))))))))))))))))))))))))))))))))))

// const insertProducts = () => {
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
//       title: "Hotdog",
//       price: "122",
//       thumbnail:
//         "https://media.istockphoto.com/id/1130731707/es/foto/hot-dog-en-blanco.webp?s=612x612&w=is&k=20&c=-hQtimWj5RhSl8-_vTeKNIVvb2PNEfjSBQCkcu8nAWQ=",
//       code: "#-Cs594",
//       stock: "44",
//       description: "It´s a hot dog, not much to say about it. Comes with some ketchup and mustard",
//       id: 2,
//       timestamp: "(08/08/2022 - 17:33:55)",
//     },
//     {
//       title: "Hotdog",
//       price: "122",
//       thumbnail:
//         "https://media.istockphoto.com/id/1130731707/es/foto/hot-dog-en-blanco.webp?s=612x612&w=is&k=20&c=-hQtimWj5RhSl8-_vTeKNIVvb2PNEfjSBQCkcu8nAWQ=",
//       code: "#-Cs594",
//       stock: "44",
//       description: "It´s a hot dog, not much to say about it. Comes with some ketchup and mustard",
//       id: 3,
//       timestamp: "(08/08/2022 - 17:33:55)",
//     },
//   ];

//   knex("products")
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

//((((((((((((((((((((((((((((((((CREATE TABLE))))))))))))))))))))))))))))))))

// insertProducts();
// knex.schema
//   .createTable("products", (table) => {
//     table.increments("id");
//     table.string("title");
//     table.integer("price");
//     table.string("thumbnail");
//     table.integer("stock");
//     table.string("code");
//     table.string("description");
//     table.string("timestamp");
//   })
//   .then(() => {
//     console.log("Table products created");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });

// knex.schema
//   .createTable("messages", (table) => {
//     table.increments("id");
//     table.string("email");
//     table.string("text");
//     table.string("timestamp");
//   })
//   .then(() => {
//     console.log("Table messages created");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     knex.destroy();
//   });
