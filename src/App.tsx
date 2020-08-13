import React from 'react';
import './assets/styles/global.css'
import Routes from './routes';
// sempre precisa importar o react
// componente: função q retorna um html
// nome do componente deve começar com letra maiuscula
// trabalhar com html dentro do javascript = JSX
function App() {
  return (
    <Routes />
  );
}

export default App;
