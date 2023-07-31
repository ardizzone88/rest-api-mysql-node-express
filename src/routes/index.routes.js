import { Router } from 'express';
import { ping } from './controllers/index.controller.js';

const router = Router();

//Creo un nuevo .get y cuando se encuentre en la ruta "ping"
//luego creo una constante "result" que va a ejecutar código asíncrono.
//Utilizando pool quiero que hagas una consulta (.query)
//Luego quiero que me devuelvas el resultado de esa consulta (res.json("resultado de consulta"))
router.get('/ping', ping);

export default router;
