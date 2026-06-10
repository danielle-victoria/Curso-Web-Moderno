-- Aula 18 - Banco Relacional: Inserir Cidades

-- Inserir cidades na tabela cidades, associando-as aos estados correspondentes
INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 1);

-- Inserir cidades utilizando subconsulta para obter o id do estado
INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 25);

-- Inserir cidades utilizando subconsulta para obter o id do estado
INSERT INTO cidades
     (nome, area, estado_id)
VALUES(
    'Caruaru',
    920.6,
    (SELECT id FROM estados WHERE sigla = 'PE')
);

-- Inserir cidades utilizando subconsulta para obter o id do estado
INSERT INTO cidades
    (nome, area, estado_id)    
VALUES(
    'Juazeiro do Norte',
    248.2,
    (SELECT id FROM estados WHERE sigla = 'CE')
);


-- Consultar todas as cidades para verificar as inserções
SELECT * FROM cidades
