-- EXERCICIOS AULA APROFUNDAMENTO-SQL

-- Exercício 1

-- a) Deleta a coluna. 

-- b) Altera o valor de gender para sex e o VARCHAR com apenas
-- seis caracteres. 

-- c) Altera o VARCHAR do valor gender permanecendo o valor com 
-- o mesmo nome. 

-- d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercício 2 

-- a) 
UPDATE Actor 
SET 
name = "Arthur Aguiar", 
birth_date = "1989/03/03", 
gender = "male"
WHERE id = "003";

-- b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

-- c) 
UPDATE Actor
SET 
name = "Douglas Silva",
birth_date = "1988/09/27",
salary = 300000,
gender = "male"
WHERE id = "005";

-- d) 
 -- O comando funciona, roda, mas acha e altera nenhm valor 
 
 -- Exercício 3
 
 -- a) 
 DELETE FROM Actor WHERE name = "Arthur Aguiar";
 
  -- b)
DELETE FROM Actor
WHERE
gender = "male" AND salary > 1000000;

-- Exercício 4

-- a) 
SELECT MAX(salary) FROM Actor;

-- b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c) 
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) 
SELECT SUM(salary) FROM Actor;

-- Exercicio 5

-- a) 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- Separou por grupo e a quantidade de pessoas que se encaixam em cada um

-- b)

SELECT id, name FROM Actor
ORDER BY name DESC;

-- c)
SELECT * FROM Actor
ORDER BY salary;

-- d) 
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- e) 
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

-- Exercicio 6

-- a)
ALTER TABLE Movie ADD playing_limit_date DATE;

-- b)
ALTER TABLE Movie CHANGE rating rating FLOAT;

-- c)

UPDATE Movie
SET
playing_limit_date = "2021-03-22"
WHERE id = "001";

UPDATE Movie
SET
playing_limit_date = "2022-02-15"
WHERE id = "002";

-- d)

