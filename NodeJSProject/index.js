const express = require("express");
const app = express();
const port = 3000;

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

const db = require("./data/db");

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

app.use("/", async (req, res) => {
  // db.execute("SELECT * FROM products")
  //   .then((data) => {
  //     res.render("index", {
  //       products: data[0],
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  try {
    const [products] = await db.execute("SELECT * FROM products");
    res.render("index", {
      products: data,
    });
  } catch (error) {
    console.log(error);
  }

  // res.render("index", {
  //   products: data,
  // });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
