-- Aula 10 - Banco Relacional: Criar tabela Estados


-- populacao DECIMAL(5,2) NOT NULL, --5 dígitos no total, sendo 2 decimais

-- Criar a tabela Estados
CREATE TABLE estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    sigla VARCHAR(2) NOT NULL,
    regiao ENUM('Nordeste', 'Norte', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL, 
    PRIMARY KEY (id),
    UNIQUE (sigla),
    UNIQUE (nome)
);