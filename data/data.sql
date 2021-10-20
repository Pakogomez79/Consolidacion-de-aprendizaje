CREATE TABLE deportistas(

	rut VARCHAR(12) unique NOT NULL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	fecha_nac DATE NOT NULL,
	estatura DECIMAL NOT NULL,
	peso DECIMAL NOT NULL
	
);

INSERT INTO deportistas(rut,nombre,fecha_nac,estatura,peso) VALUES('12.456.123-5','Juan','1990-05-10','1.80',73);
INSERT INTO deportistas(rut,nombre,fecha_nac,estatura,peso) VALUES('14.456.123-5','Pedro','1990-05-10','1.82',65);
INSERT INTO deportistas(rut,nombre,fecha_nac,estatura,peso) VALUES('12.556.123-5','Osman','1993-07-10','1.60',61);
INSERT INTO deportistas(rut,nombre,fecha_nac,estatura,peso) VALUES('14.656.123-5','Luis','1995-06-12','1.85',63);
INSERT INTO deportistas(rut,nombre,fecha_nac,estatura,peso) VALUES('15.656.123-5','Pablo','1991-09-12','1.83',60);