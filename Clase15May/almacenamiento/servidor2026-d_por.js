import express from 'express';
import mysql from 'mysql2/promise';//Pendiente nombre de la librería
import NodeCache from 'node-cache';
import { loadEnvFile } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

//stdTTL
const myCache = new NodeCache({ stdTTL: 20 }); // El tiempo que se guardan los datos en el cache, en segundos

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();

loadEnvFile(path.join(__dirname, '..', '..', '.env'));
//Completa los datos correctos
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT)
});


// let datosDB;

async function getOfertas() {

  //Pon un nombre a la llave
  const cacheKey = "ofertas";

  //Si es necesario cambia la consulta
  const consultaSQL = `SELECT * FROM ofertas;`;

  //Completa el dato faltante
  const cachedOfertas = myCache.get(cacheKey);

  if (cachedOfertas) {
    console.log("Servido desde el caché");

    //falta el dato a regresar
    return cachedOfertas;
  }

  console.log("Consultando base de datos");
  const [resultados] = await connection.query(consultaSQL);
  myCache.set(cacheKey, resultados); // Guarda los resultados en el cache con la llave definida antes y el valor obtenido de la consulta
  return resultados;

  //Esto lo vimos ayer
  // connection.connect(error => {
  //   if (error) throw error;
  //   console.log("Conectada");
  // });


  // connection.query(consultaSQL, (error, resultados) => {
  //   if (error) throw error;

  //   console.log(resultados);
  //   //Faltan datos
  //   myCache.set(cacheKey, resultados); // Guarda los resultados en el cache con la llave definida antes y el valor obtenido de la consulta
  //   datosDB = resultados;
  //   //connection.end();

  // });

  // console.log(datosDB);
  // return datosDB;
}

app.get('/storage', (req, res) => {

  //Falta un dato
  res.sendFile(path.join(__dirname, 'localStorage_por.html'));
});

app.get('/obtenerDatos', async (req, res) => {

  //Falta llamar una función
  const datos = await getOfertas();

  res.json(datos);
});

app.listen(1984, () => {
  console.log('Up and up');
});
