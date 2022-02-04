-- Exercícios Relações SQL 


CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

DESCRIBE Rating;

SELECT * FROM Rating;
SELECT * FROM Movie;
SELECT * FROM MovieCast;
SELECT * FROM Actor;

-- Exercício 1

-- a) Chave compara os elementos entre tabelas. 

-- b) 
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    10,
	"004"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito interessante",
    7,
	"001"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Muito legal!",
    8,
	"002"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"004",
    "Achei ok!",
    6,
	"003"
);


-- c) Dá erro na chave estrangeira pois o id do filme não consta no banco então não
-- é possível a relação. 

-- d)
ALTER TABLE Movie DROP COLUMN rating;

-- e) Dá erro pois o filme está sendo referenciado na outra tabela. 

-- Exercício 2 

-- a) Está sendo relacinado a um filme um ator específico. 

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- b) 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "005"
);

-- c) Erro pois não foi encontrada a chave.

-- d) Dá erro pois o ator está sendo referenciado na outra tabela. 

-- Exercício 3 


SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- a) Uma condição para retornar a informação passada. 
-- b) 

SELECT m.id as movie_id, title, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;