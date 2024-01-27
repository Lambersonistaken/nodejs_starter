const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");

const db = require("./data/db");

app.set("view engine", "ejs"); // view engine olarak ejs kullanılacak
app.use(express.static("public")); // public klasörü static olarak kullanılacak
app.use(express.static("node_modules")); // bootstrap klasörü static olarak kullanılacak

app.use(userRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
// finito
