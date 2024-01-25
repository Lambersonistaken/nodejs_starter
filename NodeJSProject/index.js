const express = require("express");
const app = express();
const port = 3000;

// middleware routing
app.use("/products/:id", (req, res) => {
  res.send(`products detail for id ${req.params.id}`);
});

app.use("/products", (req, res) => {
  // nodejs routing yapısı
  res.send("products");
});

app.use("/", (req, res) => {
  res.send("ana sayfa");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
