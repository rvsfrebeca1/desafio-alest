import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextoProvider } from './contexts/contexto';

ReactDOM.render(
  <ContextoProvider>

    <App />
  </ContextoProvider>,
  document.getElementById('root')
);
