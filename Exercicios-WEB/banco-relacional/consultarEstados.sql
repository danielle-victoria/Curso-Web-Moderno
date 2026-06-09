-- Aula 12 - Banco Relacional: Consultar Estados

-- Consultar todos os dados da tabela estados
SELECT * FROM estados

-- Consultar apenas o nome e a sigla dos estados
SELECT nome, sigla FROM estados 

-- Consultar a sigla e o nome dos estados, ordenando por nome
SELECT SIGLA,
       NOME AS "Nome do Estado"
FROM ESTADOS

SELECT SIGLA,
       NOME AS "Nome do Estado" 
FROM ESTADOS
WHERE REGIAO = 'Nordeste' -- Filtrar apenas os estados da região Nordeste

-- Consultar o nome e a região dos estados com população maior ou igual a 10 milhões
SELECT 
    NOME,
    REGIAO
FROM ESTADOS
WHERE POPULACAO >= 10 


-- Consultar o nome e a região dos estados com população maior ou igual a 10 milhões, ordenando por população, do maior para o menor
SELECT
    NOME,
    REGIAO,
    POPULACAO
FROM ESTADOS
WHERE POPULACAO >= 10 
ORDER BY POPULACAO DESC 