{/* Aula 31 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente Botão */}


interface BotaoProps {
    //cor?: 'bg-green-500' | 'bg-blue-500' | 'bg-gray-500'
    cor?: 'bg-gradient-to-r from-green-400 to-green-700' | 'bg-gradient-to-r from-blue-400 to-blue-700'
         | 'bg-gradient-to-r from-gray-400 to-gray-700'  | 'bg-green-500' | 'bg-blue-500' | 'bg-gray-500'
    className?: string
    children: any
    onClick?: () => void
}


export default function Botao(props: BotaoProps) {
    const cor = props.cor
    return (
        //from-${cor}-400 to-${cor}-700 - Não deu certo
        <button onClick={props.onClick} className={`
            bg-gradient-to-r 
            text-white px-4 py-2 rounded-md
            ${props.className}
            ${cor}
        `}>
            {props.children}
        </button>
    )
}