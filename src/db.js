//instalo msql2
//luego importo el módulo msql2
//voy a traer el objeto createPool, que es un conjunto de conexiones que puedo utilizar en producción
import { createPool } from 'mysql2/promise';
import { DB_HOST, DB_PORT, DB_USER,  DB_DATABASE } from './config.js';
//lo ejecuto y le paso todos los parámetros que espera mi DB
//lo guardo en la constante "pool" y lo exporto
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: "newells74##",
  port: DB_PORT,
  database: DB_DATABASE,
});

//pool.query('SELECT * FROM employees', (err,result))
