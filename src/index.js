import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login'



function loadPage(Component) {
  root.render(
    <React.StrictMode>
      {Component}
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
loadPage(<Login redirect={loadPage} />);



