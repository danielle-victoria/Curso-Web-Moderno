/*mport Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      
    </div>
  )
}   original*/
   

/* Aula 25 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Configuração: NextJS, TailwindCSS e Firebase */

export default function Home(){
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600
    `}>
      <span className="text-4xl">Texto</span>
    </div>
  )
}
