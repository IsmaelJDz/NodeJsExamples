//formato de fecha de entrada: opcion 1: 10-16-2019, opcion2: 2019/10/16
const http = require("http");
const server = http.createServer();

const weekday = new Array(7);
weekday[0] = "Domingo";
weekday[1] = "Lunes";
weekday[2] = "Martes";
weekday[3] = "Miercoles";
weekday[4] = "Jueves";
weekday[5] = "Viernes";
weekday[6] = "Sabado";

server.on("request", (req, res) => {
  if (req.method == "POST" && req.url === "/birthday") {
    let body = [];
    req
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        let dayOfBirth = new Date(body);
        console.log(weekday[dayOfBirth.getDay()]);
        body = Buffer.concat(body).toString();
        res.end(body);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8001);
console.log("servidor en la url: http://localhost:8001");
