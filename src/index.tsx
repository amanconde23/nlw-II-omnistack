import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// injeta um html dentro de uma estrutura html (index.html)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

