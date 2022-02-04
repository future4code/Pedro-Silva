USE `carver-pedro-henrique-duarte-da-silva`; 
-- Numero 1
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a) Create Table: Criar tabela. VarChar numero de caracteres. 
-- Primary key é a chave primaria. Date é o comando para datas.

-- b) O showDataBases é para mostras os bancos de dados. e SHOW TABLES para 
-- mostrar as tabelas. 

-- c) O Describe serve para mostrar os valores presentes na tabela e 
-- seu tipo. 

-- Numero 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a) 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- b) Entrada duplicada. Pois já existe um ID com aquele valor. 

-- c) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Faltavam parâmetros

-- d) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Lima Duarte",
  400000,
  "1949-04-18", 
  "male"
);

-- Faltava o parâmetro name. 

-- e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Faltavam as aspas. 

-- f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Cleo Pires",
  50000.33,
  "1985-03-26", 
  "female"
); 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Caio Castro",
  70000.33,
  "1982-03-26", 
  "male"
); 

-- Exercício 3

-- a)
SELECT * FROM Actor WHERE gender = "female";

-- b)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

-- c) 
SELECT * FROM Actor WHERE gender = "invalid";
-- Retorna null pois a informação passada pelo WHERE não existe. 

-- d ) 
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

-- e) 
SELECT id, name from Actor WHERE id = "002";
-- Dá erro porque a coluna name estava escrito nome.

-- Exercício 4 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- a) A query acima está selecionando informações da table Actor na qual só
-- aparecem dados com o name iniciando com a letra A ou J e com o salário acima
-- 300 mil. 

-- b) 
SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary > 350000;

-- c) 
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

-- d)
SELECT * FROM Actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%g%" OR name LIKE "%G%")
AND salary BETWEEN 350000 AND 900000;

-- Exercício 5 
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

-- b) 
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se eu fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Cidade dos Homens",
    "Amigos de infância, Acerola e Laranjinha estão se aproximando dos 18 anos. Acerola cria seu filho sozinho, já que a mãe vai trabalhar em São Paulo. Laranjinha tenta encontrar seu pai, sumido há muito tempo. Eventualmente, Laranjinha o encontra e fica sabendo que ele acabou de cumprir uma pena de 15 anos na cadeia. À medida que verdades do passado surgem, os dois amigos têm sua amizade testada.",
    "2007-08-31",
    9
);

-- Exercicio 6 

-- a) 
SELECT id, title, rating FROM Movie WHERE id = "004";

-- b) 
SELECT title FROM Movie WHERE title = "Cidade dos Homens";

-- c) 
SELECT id, title, synopsis FROM Movie 
WHERE rating <= 7;

-- Exercício 7 

-- a)
SELECT * FROM Movie 
WHERE title LIKE "%vida%";

-- b) 
SELECT * FROM Movie 
WHERE title LIKE "%Cidade%" OR synopsis LIKE "%Cidade%";

-- c) 
SELECT * FROM Movie
WHERE release_date < "2022-01-31";

-- d)
SELECT * FROM Movie
WHERE release_date < "2022-01-31" AND rating > 7
AND (title LIKE "%Cidade%" OR synopsis LIKE "%Cidade%");