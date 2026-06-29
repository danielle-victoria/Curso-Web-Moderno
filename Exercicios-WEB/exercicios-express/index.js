/* Aula 3 - Express: Configurança & Launcher #01 */

const express = require('express');
const app = express();
const port = 3000;

/*app.use */
app.all ('/opa', (req, res) => {
    res.send('Estou <b>bem</b>!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});