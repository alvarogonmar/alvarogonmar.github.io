import http from 'http';

const servidor = http.createServer(async (req, res) => {
  console.log("Alguien me mandó una solicitud");

  if (req.method === 'POST') { // si es una solicitud POST, es para votar

    let body = ''; // para acumular los datos que llegan en el cuerpo de la solicitud

    req.on('data', chunk => {
      body += chunk; // acumula los datos que llegan a la solicitud
    });

    req.on('end', async () => { // cuando ya se han recibido todos los datos, se procesa la solicitud
      const datos = JSON.parse(body);

      try {
        const response = await fetch('https://api.thecatapi.com/v1/votes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': ""
          },
          body: JSON.stringify({
            image_id: datos.image_id,
            value: datos.value
          })
        });

        const data = await response.json();

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));

      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al votar');
      }
    });

    return;
  }

  try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1', {
      method: 'GET',
      headers: {
        'x-api-key': ""
      }
    });

    const data = await response.json();

    const gato = data[0];

    const nombre = gato.breeds[0]?.name || "Gato sin raza";
    const temperamento = gato.breeds[0]?.temperament || "";
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
    <h1>${nombre}</h1>
    <p>${temperamento}</p>
    <img src="${gato.url}" width="300">
    `);

  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error al obtener datos');
  }
});

const puerto = 1984;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});