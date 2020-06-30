import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Connexion from './components/Connexion'


ReactDOM.render(
  <React.StrictMode>
    <Connexion />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
