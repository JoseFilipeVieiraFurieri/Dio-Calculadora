import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NumberProvider } from './NumberContext';

import createGlobalStyle  from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberProvider>
      <GlobalStyle />
      <App />
    </NumberProvider>
  </React.StrictMode>
);

// tive que definir o global styles desse jeito. Da maneira que o sujeito estava fazendo estava dando erro aqui então acabei definindo
// tireto no index mesmo ja que como é um reset css e provavelmente não vai ser muito alterado acaba não tendo muito problema

// estão o styled components serve para criar um componente estilizado ja com o css para ser usado como um componente normal a sintese
// e export const component = styled.div`css aqui` e depois importar aonde for usar. lembrar sempre de instalar ele nas dependencias do 
// projeto antes


