import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageManager from './functions/PageManager';
import Home from './pages/Home'



function loadPage(Component) {
  root.render(
    <React.StrictMode>
      {Component}
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const pageManager = new PageManager(loadPage);
loadPage(<Home redirect={loadPage} />);



