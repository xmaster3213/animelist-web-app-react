import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageManager from './functions/PageManager';




function loadPage(path) {
  const Page = require(path + '.js');
  root.render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const pageManager = new PageManager('HOME');
loadPage(pageManager.getCurrentPage().getPath());



