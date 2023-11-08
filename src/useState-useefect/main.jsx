import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';

import { App2 } from '../useContext/app.jsx';
import PulsaBoton from '../useRef/PulsaBotones.jsx'; 
import Contador from '../useRef/Contador.jsx';
import AutoFocus from '../useRef/Autofocus.jsx';
import Mensajeprevio from '../useRef/Mensaje.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App2 />
    <PulsaBoton /> 
    <Contador/>
    <AutoFocus/>
    <Mensajeprevio/>
  </React.StrictMode>
);
