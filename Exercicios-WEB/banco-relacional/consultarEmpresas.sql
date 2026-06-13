-- Aula 26 - Banco Relacional: Consultar Empresas e Cidades

-- Apenas funciona no MySQL Workbench, não funciona no VS Code
/*SELECT e.nome, c.nome
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
AND c.id = eu.cidade_id
AND sede;*/

-- Com apelido para as colunas - Funciona no VS Code e no MySQL Workbench
/*SELECT e.nome Empresa, c.nome Cidade
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
AND c.id = eu.cidade_id
AND sede;*/

-- Com apelido para as colunas e usando AS - Funciona no VS Code e no MySQL Workbench
SELECT e.nome AS Empresa, c.nome AS Cidade
FROM empresas e, empresas_unidades eu, cidades c
WHERE e.id = eu.empresa_id
AND c.id = eu.cidade_id
AND sede;