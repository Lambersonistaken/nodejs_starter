const express = require("express");
const app = express();
const port = 3000;

const mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "nodedb",
});

const data = [
  {
    id: 1,
    name: "Samsung S6",
    price: 3000,
    isActive: true,
    imageURL: "s6.png",
    isHome: true,
  },
  {
    id: 2,
    name: "Samsung S7",
    price: 4000,
    isActive: true,
    imageURL: "s7.png",
    isHome: true,
  },
  {
    id: 3,
    name: "Samsung S8",
    price: 5000,
    isActive: true,
    imageURL: "s8.png",
    isHome: false,
  },
];

app.set("view engine", "ejs"); // view engine olarak ejs kullanılacak
app.use(express.static("public")); // public klasörü static olarak kullanılacak
app.use(express.static("node_modules")); // bootstrap klasörü static olarak kullanılacak

// middleware routing
app.use("/products/:id", (req, res) => {
  const urun = data.find((item) => item.id == req.params.id);
  res.render("products_details", urun);
});

app.use("/products", (req, res) => {
  // nodejs routing yapısı
  res.render("products", {
    products: data,
  });
});

app.use("/", (req, res) => {
  res.render("index", {
    products: data,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
