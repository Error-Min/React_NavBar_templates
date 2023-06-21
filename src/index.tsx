import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/styles/Navbar/Navbar.css';
import './components/styles/NavBarLogo/NavBarLogo.css'
import './components/styles/NavBarLogoPro/NavBarLogoPro.css'

const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

