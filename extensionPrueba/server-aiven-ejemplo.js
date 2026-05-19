const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const variablesRequeridas = ["DB_HOST", "DB_PORT", "DB_USER", "DB_PASSWORD", "DB_NAME"];

app.use(cors());

const variablesFaltantes = variablesRequeridas.filter((variable) => !process.env[variable]);

if (variablesFaltantes.length > 0) {
  console.error(`Faltan variables en .env: ${variablesFaltantes.join(", ")}`);
  process.exit(1);
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  },
  waitForConnections: true,
  connectionLimit: 10
});

app.get("/datos", async (req, res) => {
  try {
    const [filas] = await pool.query("SELECT * FROM usuarios LIMIT 20");
    res.json(filas);
  } catch (error) {
    res.status(500).json({
      error: "No se pudieron consultar los datos",
      detalle: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`API conectada en http://localhost:${port}/datos`);
});
