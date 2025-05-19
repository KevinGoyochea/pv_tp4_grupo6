import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Asegúrate de que App se importa sin llaves
import './assets/Styles/index.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
