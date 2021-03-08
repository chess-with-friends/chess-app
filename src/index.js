import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// debugging
import * as Board from './chess/board'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>
  , root);
  window.Board = Board
});