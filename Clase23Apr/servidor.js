//Escribe un comentario explicando para qué sirve http
import http from 'http'; // El http sirve para crear un servidor web que lo que hace 
// es manejar solicitudes y respuestas, como por ejemplo cuando alguien entra a la pagina el servidor responde con la pagina, o si se hace una solicitud el servidor responde con los datos.


//Escribe un comentario explicando para qué sirve fs
import fs from 'fs'; // El fs sirve para manejar archivos, como por ejemplo leer un archivo o escribir en un archivo,
//  lo que nos permite mostrar paginas html o guardar datos en archivos de texto.


    //Esta función deberá mostrar deberá mostrar una página HTML 
    //con la bienvenida a tu proyecto
    function darBienvenida(req, res) {
       //Agrega lo mínimo necesario en bienvenida.html
      
      fs.readFile('bienvenida.html', 'utf8', (error, data) => {
        if (error) {
           //Escribe qué significa el 500: Error interno del servidor (algo falló al procesar la solicitud)
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Oh no!!!!');
          return;
        }
        //Escribe qué significa el 200: Solicitud exitosa

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }


    //Esta función deberá enviar un json con los datos de los usuarios
    function getUsuarios(req, res) {
        //Esto representa un objeto JSON de un usuario
        //Agrega otro usuario
        const usuarios = [
            {
            nombre: "Punk",
            saldo: 0
            },
            {
            nombre: "Alvaro",
            saldo: 100
            }
        ];
      res.writeHead(200, { 'Content-Type': 'application/json' });
      
      //Escribe qué hace la función stringify y por qué la tenemos que usar
      // La funcion stringify convierte un objeto de JavaScript a una cadena de texto en formato JSON, 
      // lo que nos permite enviar datos estructurados a través de la red o almacenarlos en archivos de texto. 
      // La usamos porque el protocolo HTTP solo puede enviar texto, 
      // por lo que necesitamos convertir nuestros objetos a texto para poder enviarlos como respuesta a las solicitudes.
      res.end(JSON.stringify(usuarios));
    }

  
    function mostrarPerfil(req, res) {
        fs.readFile('perfil.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

     
      function mostrarMovimientos(req, res) {
        //Construye una página básica movimientos.html
        fs.readFile('movimientos.html', 'utf8', (error, data) => {
            if (error) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Oh no!!!!');
              return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
      }

    //Esta función deberá enviar un json con los datos de las movimientos
    function getMovimientos(req, res) {
        const movimientos = [
            {
            tipo: "Depósito",
            monto: 100,
            fecha: "2026-04-21"
            },
            {
            tipo: "Compra",
            monto: -50,
            fecha: "2026-04-20"
            },
            {
            tipo: "Transferencia",
            monto: 200,
            fecha: "2026-04-19"
            }
        ];
    //Tienes que corregir varias cosas en esta sección
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(movimientos));
    }

    function manejarRuta404(req, res) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      //Cambia el mensaje por algo más divertido
      res.end('Esta pagina es como tu novi@, no existe :)');
    }

    function mostrarEquipo(req, res) {
        fs.readFile('equipo.html', 'utf8', (error, data) => {

        if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al cargar el equipo');
        return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }

    function mostrarOpinion(req, res) {
        fs.readFile('opinion.html', 'utf8', (error, data) => {

        if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al cargar la opinion');
        return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }

    function getPrestamos(req, res) {
            const prestamos = [
            {
                usuario: "Punk",
                monto: 5000,
                plazo: 12,
                semanas_pagadas: 4,
                status: "aprobado"
            },
            {
                usuario: "Alvaro",
                monto: 3000,
                plazo: 8,
                semanas_pagadas: 8,
                status: "pendiente"
            }
            ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(prestamos));
    }

    function solicitarPrestamo(req, res) {
        fs.readFile('prestamo.html', 'utf8', (error, data) => {

        if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al cargar la solicitud de préstamo');
        return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
    }

    function getEstadoPrestamo(req, res) {
        const prestamos = [
            {
            loan_id: "loan_001",
            usuario: "Punk",
            monto: 5000,
            plazo: 12,
            semanas_pagadas: 4,
            semanas_restantes: 8,
            status: "activo"
            },
            {
            loan_id: "loan_002",
            usuario: "Alvaro",
            monto: 3000,
            plazo: 8,
            semanas_pagadas: 8,
            semanas_restantes: 0,
            status: "pagado"
            }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(prestamos));
    }

    function mostrarEstadoPrestamo(req, res) {
        fs.readFile('estado-prestamo.html', 'utf8', (error, data) => {
            if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error al cargar el estado del préstamo');
            return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    
    //incluye el enlace a la documentación de createServer
    // https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
    const servidor = http.createServer((req, res) => {
      const url = req.url;

      if (url === '/') {
        darBienvenida(req, res);
      } else if (url === '/api/usuarios') {
        getUsuarios(req, res);
      } else if (url === '/api/movimientos') {
        getMovimientos(req, res);
      } 
      else if (url === '/usuarios') {
        mostrarUsuarios(req, res);
      } 
      else if (url === '/movimientos') {
        mostrarMovimientos(req, res);
      } 
      //Agrega una ruta /equipo y su función correspondiente para que muestre el equipo del proyecto
      else if (url === '/equipo') {
        mostrarEquipo(req, res);
      }
      //Haz una página equipo.html correspondiente //
      //Escribe el nombre completo y una cualidad que valores en esa persona de tu equipo //
      //Trata de agregar una imagen a equipo.html // 
      //Explica si la puedes ver, en caso negativo ¿qué crees que pase? //
      
      // Sí pude poner la imagen, solamente me salen errores de GET porque el sitio de donde jalo la foto, 
      // no permite que otros sitios, usemos la imagen, pero la imagen si se ve en la pagina
      
      //Agrega una ruta /opinion //
      //Haz una página opinion.html //
      else if (url === '/opinion') {
        mostrarOpinion(req, res);
      }
      // Lee el siguiente artículo y responde ¿Crees que el colonialismo digital es un riesgo para tu carrera profesionl? ¿Para tu vida persona? //
      //¿Qué es el freedombox? //
      //https://www.aljazeera.com/opinions/2019/3/13/digital-colonialism-is-threatening-the-global-south
      else if (url === '/prestamo') {
        solicitarPrestamo(req, res);
      }
      else if (url === '/api/prestamo') {
        getPrestamos(req, res);
      }
      else if (url === '/api/estado-prestamo') {
        getEstadoPrestamo(req, res);
      }
      else if (url === '/estado-prestamo') {
        mostrarEstadoPrestamo(req, res);
      }
      else {
        manejarRuta404(req, res);
      }
    });

    const puerto = 1984;
    servidor.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`);
    });

    //Importante
    //En esta actividad deberás agregar en miarchivo.html un enlace a servidor.js y al resto de los html