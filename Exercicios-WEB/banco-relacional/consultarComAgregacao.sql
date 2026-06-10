-- Aula 16 - Banco Relacional: Consultar Estados com Agregação


--Consultar a população total por região, ordenando do maior para o menor
SELECT
    regiao as 'Região',
    SUM(populacao) as 'População Total'
FROM estados
GROUP BY regiao
ORDER BY 'População Total' DESC


-- Consultar a população total do país
SELECT
   SUM(populacao) as 'População Total'
FROM estados


-- Consultar a média da população total por estado
SELECT
   AVG(populacao) as 'Média da População Total'
FROM estados
