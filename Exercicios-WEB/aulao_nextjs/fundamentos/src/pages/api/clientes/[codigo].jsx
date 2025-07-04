/* Aula 18 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Usando API #02 */

export default function handler(req, res){

    const codigo = req.query.codigo
    
    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `mariamariamaria${codigo}@xcfmail.com`
    })
}