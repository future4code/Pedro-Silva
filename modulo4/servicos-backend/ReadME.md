USE `carver-pedro-henrique-duarte-da-silva`; 

CREATE TABLE servicos_backend(
id INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) UNIQUE NOT NULL,
number VARCHAR(255) NOT NULL,
complement VARCHAR(255),
cep VARCHAR(255) NOT NULL,
street VARCHAR(255) NOT NULL,
neighborhood VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL, 
state VARCHAR(255) NOT NULL
);

DESCRIBE servicos_backend;

SELECT * FROM servicos_backend;