
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'application/json' });

  let salida = {
    nombre: 'Manuel',
    edad: 32,
    url: req.url
  }
  res.write(JSON.stringify(salida));
  res.end();

}).listen(8080);

console.log('Escuchando en el puerto 8080');