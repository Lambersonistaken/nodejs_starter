// request - response  => server - client

var http = require("http"); // http module

var server = http.createServer((req, res) => {
  console.log("request was made: " + req.url); // request url

  res.write("<h1> Selamun Aleykum </h1>"); // response write
  res.end(); // response end
}); // create server fonksiyonu node içinde var

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
