/* Aula 17 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Usando API #01 */


export default function handler(req, res){
    //res.status(200).send()

    if(req.method === "GET"){
        handleGet(req, res)
    }else{
        res.status(405).send()
    }
    
}


function handleGet(req, res){
    res.status(200).json({
        id: 3,
        nome: 'Maria',
        idade: 33,
        email: 'mariamariamaria@xcfmail.com'
    })
}