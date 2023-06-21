import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './components/styles/Navbar/Navbar.css';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

