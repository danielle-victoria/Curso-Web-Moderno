-- Aula 24 - Banco Relacional: Criar Tabela Empresas

CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj INT UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
    
);

-- cidades_empresas

CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,  -- UM DÍGITO, 0 OU 1
    PRIMARY KEY (empresa_id, cidade_id)
    
);

