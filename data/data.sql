CREATE TABLE deportistas(

	rut VARCHAR(12) unique NOT NULL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	fecha_nac DATE NOT NULL,
	estatura DECIMAL NOT NULL,
	peso DECIMAL NOT NULL
	
);