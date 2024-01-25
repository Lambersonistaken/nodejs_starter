// request - response  => server - client

var http = require("http"); // http module
var fs = require("fs"); // file system module

var server = http.createServer((req, res) => {
  console.log("request was made: " + req.url); // request url

  if (req.url == "/") {
    fs.readFile("index.html", (err, html) => {
      // burada ilk parametre hata varsa diye ikinci parametre ise html dosyası yani data
      res.write(html); // response write
      res.end(); // response end
    });
  } else if (req.url == "/urunler") {
    fs.readFile("ürünler.html", (err, html) => {
      // burada ilk parametre hata varsa diye ikinci parametre ise html dosyası yani data
      res.write(html); // response write
      res.end(); // response end
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      // burada ilk parametre hata varsa diye ikinci parametre ise html dosyası yani data
      res.write(html); // response write
      res.end(); // response end
    });
  }
}); // create server fonksiyonu node içinde var

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
