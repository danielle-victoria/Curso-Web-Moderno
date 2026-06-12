-- Aula 23 - Banco Relacional: Explorando os Tipos de JOINs

SELECT * FROM prefeitos;
SELECT * FROM cidades;

-- Bug do Pluggin - Não retorna o nome das cidades no VS Code, mas retorna no MySQL Workbench
SELECT *
FROM cidades c INNER JOIN prefeitos p
    ON c.id = p.cidade_id;

SELECT *
FROM cidades c LEFT JOIN prefeitos p
    ON c.id = p.cidade_id;


SELECT *
FROM cidades c LEFT OUTER JOIN prefeitos p
    ON c.id = p.cidade_id;


SELECT *
FROM cidades c RIGHT JOIN prefeitos p
    ON c.id = p.cidade_id;


/*SELECT *
FROM cidades c FULL JOIN prefeitos p
    ON c.id = p.cidade_id;*/ /*Não é suportado*/


-- Substituição da operação anterior
SELECT *
FROM cidades c LEFT OUTER JOIN prefeitos p
    ON c.id = p.cidade_id
UNION

SELECT *
FROM cidades c RIGHT JOIN prefeitos p
    ON c.id = p.cidade_id;