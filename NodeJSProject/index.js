const express = require("express");
const app = express();
const port = 3000;

const data = [
  { id: 1, name: "Samsung S6", price: 3000, isActive: true },
  { id: 2, name: "Samsung S7", price: 4000, isActive: true },
  { id: 3, name: "Samsung S8", price: 5000, isActive: true },
];

app.set("view engine", "ejs"); // view engine olarak ejs kullanılacak

// middleware routing
app.use("/products/:id", (req, res) => {
  res.render("products_details");
});

app.use("/products", (req, res) => {
  // nodejs routing yapısı
  res.render("products", {
    products: data,
  });
});

app.use("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
