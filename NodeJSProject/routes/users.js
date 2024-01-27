const express = require("express");
const router = express.Router();
const db = require("../data/db");

// middleware routing
router.use("/products/:id", async (req, res) => {
  try {
    const [products] = await db.execute("SELECT * FROM products");
    const urun = products.find((item) => item.id == req.params.id);
    res.render("products_details", urun);
  } catch (error) {
    console.log(error);
  }
});

router.use("/products", async (req, res) => {
  try {
    const [products] = await db.execute("SELECT * FROM products");
    res.render("products", {
      products: products,
    });
  } catch (error) {
    console.log(error);
  }
  // nodejs routing yapısı
  //
});

router.use("/", async (req, res) => {
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
      products: products,
    });
  } catch (error) {
    console.log(error);
  }

  // res.render("index", {
  //   products: data,
  // });
});

module.exports = router;
