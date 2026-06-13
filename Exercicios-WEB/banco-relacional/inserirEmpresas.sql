-- Aula 25 - Banco Relacional: Inserir Empresas


-- Modificando o tipo de dado da coluna cnpj para VARCHAR(14) para acomodar os zeros à esquerda
ALTER TABLE empresas MODIFY cnpj VARCHAR(14); 


INSERT INTO empresas
     (nome, cnpj)
VALUES
('Bradesco', 12345678901012),
('Vale', 98765432101013),
('Cielo', 01122233301014);


-- DESCRIBE empresas; - Mostra a estrutura da tabela
DESC empresas; 

DESC prefeitos;

SELECT * FROM empresas;
SELECT * FROM cidades;


INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
(1, 1, 1), -- Bradesco tem sede em Campinas
(1, 2, 0), -- Bradesco tem uma unidade em Niterói
(2, 1, 0), -- Vale tem uma unidade em Campinas
(2, 2, 1); -- Cielo tem sede em Niterói