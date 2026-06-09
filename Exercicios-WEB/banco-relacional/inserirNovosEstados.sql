-- Aula 14 - Banco Relacional: Inserir Estados com ID

-- Inserir um novo estado com ID específico
INSERT INTO estados (id, nome, sigla, regiao, populacao)
VALUES (1000, 'Novo', 'NV', 'Sul', 2.54);

-- Consultar todos os dados da tabela estados para verificar a inserção
SELECT * FROM estados

-- Inserir um novo estado sem especificar o ID, permitindo que o banco de dados gere automaticamente
INSERT INTO estados (nome, sigla, regiao, populacao)
VALUES ('Mais Novo', 'MV', 'Norte', 2.51);

-- Consultar todos os dados da tabela estados para verificar a inserção
SELECT * FROM estados