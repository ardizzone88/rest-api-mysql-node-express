//Importo express, agregndo type:"module" en el package.json
import express from 'express';
//importo employees.routes e index.routes
import indexRoutes from './routes/index.routes.js';
import employeesRoutes from './routes/employees.routes.js';
//guardo el objeto que me da express en una constante
const app = express();
//Antes de que llegue a la ruta vmos a usar desde express su método llamado json
//Antes recibir los datos los voy a convertir en un objeto y luego se los voy a pasar a las routes
app.use(express.json());
//quiero usar indexRoutes
app.use(indexRoutes);
//quiero usar employyes routes
//que agregue a todas las rutas de employees el "/api"
app.use('/api', employeesRoutes);
//Si un cliente busca una ruta q no existe lanzará el msj de érror 404
app.use((req, res, next) => {
  res.status(404).json({
    message: 'La ruta no existe',
  });
});

export default app;