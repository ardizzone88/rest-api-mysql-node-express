//Traigo el módulo Router de express, es para poder crear toda una sección de rutas - Sería como agrupar todas las rutas y colocarles un nombre
import { Router } from 'express';
import {
  getEmployees,
  getEmployeesId,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from './controllers/employees.controllers.js';

const router = Router();

//Cuando visiten la ruta '/employees', voy a procesarlo con un request y un rest y devolvera el res.send
// peticiones get para mostrar
router.get('/employees', getEmployees);

//Cuando me pases /employees al lado para ejecutar ésta función tienes que pasarme el id
router.get('/employees/:id', getEmployeesId);

//Cuando visiten la ruta '/employees', voy a procesarlo con un request y un rest y devolvera el res.send
//post para crear
router.post('/employees', createEmployees);

//Cuando visiten la ruta '/employees', voy a procesarlo con un request y un rest y devolvera el res.send
//patch para actualizar
router.patch('/employees/:id', updateEmployees);

//Cuando visiten la ruta '/employees', voy a procesarlo con un request y un rest y devolvera el res.send
//delete para eliminar
router.delete('/employees/:id', deleteEmployees);

export default router;
