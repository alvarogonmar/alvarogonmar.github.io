import express from 'express';

const app = express();

const compras = [
  { id: 1, comercio: 'Amazon', monto: 1899, quincenas: 6, estado: 'activa' },
  { id: 2, comercio: 'Liverpool', monto: 2499, quincenas: 8, estado: 'pendiente' },
  { id: 3, comercio: 'Walmart', monto: 999, quincenas: 4, estado: 'liquidada' }
];

app.get('/api/compras/:id', (req, res) => {
  const id = Number(req.params.id);

  const compra = compras.find(c => c.id === id);

  if (!compra) {
    return res.status(404).json({
      error: 'Compra no encontrada'
    });
  }

  res.status(200).json({
    mensaje: 'Compra encontrada',
    compra
  });
});

app.listen(3001, () => {
  console.log('Servidor corriendo en http://localhost:3001');
});