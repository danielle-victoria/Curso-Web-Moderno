{/*import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
  Arquivo original - _app.jsx
*/}  


import '../styles/globals.css'
import '../styles/app.css'

function MyApp({Component, pageProps}){
  return <Component {...pageProps} />

}

export default MyApp


