// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import type { NextApiRequest, NextApiResponse } from "next";

/*type Data = {  original com extensão .ts
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
*/

/* Aula 17 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Usando API #01 */
/* Aula 18 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Usando API #02 */

export default function handler(req, res) {
  //res.status(200).json({name: 'Teste API'})
  res.status(200).json({
    name: 'Teste API',
    metodo: req.method,
    //params: JSON.stringify(req.query)
    nome: req.query.nome,
    idade: +req.query.idade
  })
}

