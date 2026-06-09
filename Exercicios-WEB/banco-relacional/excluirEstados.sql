-- Aula 15 - Banco Relacional: Excluir Estados 

-- Excluir o estado com a sigla 'NV'
DELETE FROM estados
WHERE sigla = 'MV'; 

-- Consultar todos os dados da tabela estados para verificar a exclusão
SELECT * FROM estados

DELETE FROM estados
WHERE id >= 1000;

-- Consultar todos os dados da tabela estados para verificar a exclusão
SELECT * FROM estados