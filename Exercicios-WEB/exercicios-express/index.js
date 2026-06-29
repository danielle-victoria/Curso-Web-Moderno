/* Aula 3 - Express: Configurança & Launcher #01 */

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});