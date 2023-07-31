-- Creo la DB y ejecuto "si no existe, crea la DB company DB"

--Luego en la consola, accedo a mysql y con el comando "databases;" muestro la DB creada 
CREATE DATABASE IF NOT EXISTS companydb;

--Con el comando use companydb accedo a mi nuevo db
--EN la DB companydb creo la tabla employye
USE companydb

--Creo los campos de la tabla
CREATE TABLE employee {
    id INT(11)NOT NULL AUTO_INCREMENT, --un id con un num entero que no sea null  max de  11 caracteres
    name VARCHAR(45) DEFAULT NULL, --name ser[a un campo texto con un max de 45 caract
    salary INT DEFAULT NULL, --un salary con un num entero  max de  5 caracteres
    PRIMARY KEY (id) --la primary key sera el num id 

};

--muestra lo que contiene la tabla
DESCRIBE employee;

--Creo nuevos valores a la tabla employee
INSERT INTO employee VALUES
(1, "joe", 1000),
(2, "Erick", 3500),
(3, "Paula", 1500),
(4, "Soledad", 2300);

--puedo visualizarlos con el comando SELECT * FROM employee


