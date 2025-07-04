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

//Aula 17 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Usando API #01 */

export default function handler(req, res) {
  res.status(200).json({name: 'Teste API'})
}

