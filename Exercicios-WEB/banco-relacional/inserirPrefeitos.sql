-- Aula 22 - Banco Relacional: Inserir Prefeitos

-- Relação entre cidades e prefeitos: Cada cidade tem um prefeito, mas um prefeito pode não ter uma cidade (caso seja interino ou esteja em transição). Portanto, a relação é de um para um (1:1) entre cidades e prefeitos.

SELECT * FROM cidades;


INSERT INTO prefeitos
    (nome, cidade_id)
VALUES 
    ('Rodrigo Neves', 2),
    ('Rodrigo Anselmo', 3),
    ('Zenaldo Coutinho', null);

SELECT * FROM prefeitos;   

INSERT INTO prefeitos
    (nome, cidade_id)   
VALUES 
    ('Rafael Greca', null);

 SELECT * FROM prefeitos;   
