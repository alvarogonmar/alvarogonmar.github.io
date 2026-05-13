import express from 'express'; // Me gusta Express porque hace mas facil crear servidores y manejar rutas
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const puerto = 1984;

// Express hace que el codigo sea mucho mas corto y organizado

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname)); // Me pareció util express.static porque permite mostrar archivos facilmente

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'bienvenida.html'));
});

app.get('/api/usuarios', (req, res) => { // Con Express es mas sencillo enviar archivos HTML
  const usuarios = [
    { nombre: "Punk", saldo: 0 },
    { nombre: "Alvaro", saldo: 100 }
  ];

  res.json(usuarios);   // Me gusto que Express tiene res.json() y ya convierte los objetos automaticamente
});

app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'perfil.html'));
});

app.get('/movimientos', (req, res) => {
  res.sendFile(path.join(__dirname, 'movimientos.html'));
});

app.get('/api/movimientos', (req, res) => {
  const movimientos = [
    { tipo: "Depósito", monto: 100, fecha: "2026-04-21" },
    { tipo: "Compra", monto: -50, fecha: "2026-04-20" },
    { tipo: "Transferencia", monto: 200, fecha: "2026-04-19" }
  ];

  res.json(movimientos);
});

app.get('/equipo', (req, res) => {
  res.sendFile(path.join(__dirname, 'equipo.html'));
});

app.get('/opinion', (req, res) => {
  res.sendFile(path.join(__dirname, 'opinion.html'));
});

app.get('/prestamo', (req, res) => {
  res.sendFile(path.join(__dirname, 'prestamo.html'));
});

app.get('/api/prestamo', (req, res) => {
  const prestamos = [
    { usuario: "Punk", monto: 5000, plazo: 12, semanas_pagadas: 4, status: "aprobado" },
    { usuario: "Alvaro", monto: 3000, plazo: 8, semanas_pagadas: 8, status: "pendiente" }
  ];

  res.json(prestamos);
});

app.get('/estado-prestamo', (req, res) => {
  res.sendFile(path.join(__dirname, 'estado-prestamo.html'));
});

app.get('/api/estado-prestamo', (req, res) => {
  const prestamos = [
    { loan_id: "loan_001", usuario: "Punk", monto: 5000, plazo: 12, semanas_pagadas: 4, semanas_restantes: 8, status: "activo" },
    { loan_id: "loan_002", usuario: "Alvaro", monto: 3000, plazo: 8, semanas_pagadas: 8, semanas_restantes: 0, status: "pagado" }
  ];

  res.json(prestamos);
});

app.get('/limite-credito', (req, res) => {
  res.sendFile(path.join(__dirname, 'limite-credito.html'));
});

app.get('/api/limite-credito', (req, res) => {
  const limites = [
    { usuario: "Punk", limite_total: 10000, limite_usado: 3000, limite_disponible: 7000 },
    { usuario: "Alvaro", limite_total: 15000, limite_usado: 15000, limite_disponible: 0 }
  ];

  res.json(limites);
});

app.get('/pagos', (req, res) => {
  res.sendFile(path.join(__dirname, 'pagos.html'));
});

app.get('/api/pagos', (req, res) => {
  const pagos = [
    { id: "pago_001", usuario: "Punk", monto: 500, fecha: "2026-04-20", status: "completado" },
    { id: "pago_002", usuario: "Alvaro", monto: 1200, fecha: "2026-04-18", status: "completado" },
    { id: "pago_003", usuario: "Alvaro", monto: 800, fecha: "2026-04-30", status: "pendiente" }
  ];

  res.json(pagos);
});

app.get('/compras', (req, res) => {
  res.sendFile(path.join(__dirname, 'compras.html'));
});

app.get('/api/compras', (req, res) => {
  const compras = [
    { id: "compra_001", usuario: "Punk", comercio: "Amazon", monto: 1500, cuotas: 3, fecha: "2026-04-15" },
    { id: "compra_002", usuario: "Alvaro", comercio: "Liverpool", monto: 5000, cuotas: 6, fecha: "2026-04-10" },
    { id: "compra_003", usuario: "Punk", comercio: "Rappi", monto: 350, cuotas: 1, fecha: "2026-04-21" }
  ];

  res.json(compras);
});

app.get('/score-credito', (req, res) => {
  res.sendFile(path.join(__dirname, 'score-credito.html'));
});

app.get('/api/score-credito', (req, res) => {
  const scores = [
    { usuario: "Punk", score: 720, nivel: "bueno", ultima_actualizacion: "2026-04-01" },
    { usuario: "Alvaro", score: 580, nivel: "regular", ultima_actualizacion: "2026-04-01" }
  ];

  res.json(scores);
});

app.use((req, res) => {
  res.status(404).send('Esta pagina es como tu novi@, no existe :)');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);   // Express hace mas facil iniciar el servidor
});