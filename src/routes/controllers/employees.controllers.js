import { pool } from '../../db.js';
// Controladores que opererán con la db

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employee');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: 'A ocurrido un error' });
  }
};

export const getEmployeesId = async (req, res) => {
  try {
    //que muestre el empleado ?(será el num de id)  que le pase a la ruta req.params.id --- por ejemplo: api/employess/5
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [
      req.params.id,
    ]);
    // y sí no trae id, que lanze el msj de error 404
    if (rows.length <= 0)
      return res.status(404).json({
        message: 'No se encuentra el empleado',
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: 'A ocurrido un error' });
  }
};

export const createEmployees = async (req, res) => {
  try {
    const { name, salary } = req.body; //del request body voy a a extraer el name y salary
    const [rows] = await pool.query(
      'INSERT INTO employee(name,salary) VALUES (?,?)', // Inserto los valores name,salary para crear empleados, (?,?) esto quiere decir que primero le pasaré un valor y luego un segundo valor
      [name, salary] // le paso en un array los valores quiero pasarle a esa consulta
    );
    console.log(req.body);
    res.send({
      id: rows.insertId, //al moemnto de recibir la respuesta, el post me devuelve el inserId
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({ message: 'A ocurrido un error' });
  }
};
export const deleteEmployees = async (req, res) => {
  try {
    //elimina un employees por id, utilizo el where par ordenarla en qué parte de la tabla quiero eliminar
    //extraigo los valores del result, de los cuales sól quero obtener el resultSetHeader
    const [result] = await pool.query('DELETE FROM employee WHERE id = ? ', [
      req.params.id,
    ]);
    //Sí dentro del objeto resultHeaderSet, affectedrows es menor o igual a 0 lanza un 404
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: 'No se eliminó el empleado',
      });
    //En caso de que tenga valor 1 se le enviará al cliente el status 204, que indica que todo fue bien pero no le estoy respondeindo nada al cliente
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: 'A ocurrido un error' });
  }
};

export const updateEmployees = async (req, res) => {
  try {
    //guardo lo que trae req.params.id
    const { id } = req.params;
    //Recibo dos valores: name, salary - serán los campos a actualizar
    const { name, salary } = req.body;
    //guardo en result que extraigo de ese arreglo de respuesta -
    // voy a pasar los valores a editar en db name y salary, Si el valor es null que devuelva el valor qu estaba
    const [result] = await pool.query(
      'UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ?',
      [name, salary, id]
    );
    //Si no se afectan ninguna fila, que lance un status 404
    if (result.affectedRows === 0)
      return res.status(404).json({
        message: 'No se realizaron cambios',
      });
    //Después de que pudo actulizar, indico que  desde la tabla de employee voy a estar buscando dónde el id sea igual a lo que voy a encontrar aquí
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: 'A ocurrido un error' });
  }
};
