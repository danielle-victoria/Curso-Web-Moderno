-- Aula 13 - Banco Relacional: Atualizar Estados


-- Atualizar a população do estado do Acre para 0.90 milhões
UPDATE estados
SET populacao = 0.90
WHERE sigla = 'AC';

-- Consultar o nome, a sigla e a população do estado do Acre para verificar a atualização
SELECT nome, sigla, populacao 
FROM estados
WHERE sigla = 'AC';

-- Consultar o nome dos estados com população maior que 10 milhões
SELECT est. `nome` FROM `estados` est
WHERE `populacao` > 10

-- Consultar o nome dos estados com população maior que 10 milhões, ordenando por nome
SELECT est.nome FROM estados est
WHERE populacao > 10