-- Aula 19 - Banco Relacional: Consultar Múltiplas Tabelas (JOIN)

-- Consultar todas as cidades juntamente com o nome do estado correspondente utilizando JOIN
SELECT * FROM estados e, cidades c

-- Consultar todas as cidades juntamente com o nome do estado correspondente utilizando JOIN e filtrando por estado específico
SELECT * FROM estados e, cidades c
WHERE e.id = c.estado_id;

-- Consultar o nome do estado, nome da cidade e região utilizando JOIN
-- Bug do Pluggin - Não retorna o nome do estado no VS Code, mas retorna no MySQL Workbench
SELECT e.nome, c.nome, regiao as regiao
FROM estados e, cidades c
WHERE e.id = c.estado_id



-- Consultar o nome do estado, nome da cidade e região utilizando JOIN
-- Bug Corrigido!! "as"
SELECT
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região
FROM estados e, cidades c
WHERE e.id = c.estado_id


SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
FROM estados e
INNER JOIN cidades c
    ON e.id = c.estado_id

