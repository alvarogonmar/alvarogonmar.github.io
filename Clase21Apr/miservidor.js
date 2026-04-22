import http from 'http';
import url from 'url';

const servidor = http.createServer((req, res) => {
  console.log("Alguien me mandó una solicitud");
  //   console.log(req)

  const urlProcesada = url.parse(req.url, true);
  const queryParams = urlProcesada.query;
  console.log(queryParams.x);
  console.log(queryParams.y);

  const nombre = queryParams.nombre || "desconocido";
  const modo = queryParams.modo || "normal";

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (modo === "saludo") {
    res.end(`Hola ${nombre}, que bueno verte`);
  } else if (modo === "despedida") {
    res.end(`Adios ${nombre}, vuelve pronto`);
  } else {
    res.end(`Hola ${nombre}, no especificaste modo`);
  }
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
