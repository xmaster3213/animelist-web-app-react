import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageManager from './functions/PageManager';




function loadPage(name) {
  Element = pageManager.pageClasses[name];
  root.render(
    <React.StrictMode>
      {Element}
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const pageManager = new PageManager(loadPage);
loadPage('HOME');



