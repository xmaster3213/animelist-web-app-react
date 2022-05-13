import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login'
import Home from './pages/Home'



function loadPage(Component) {
  root.render(
    <React.StrictMode>
      {Component}
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
if (sessionStorage.getItem('user')) {
  loadPage(<Home redirect={loadPage} />);
} else {
  loadPage(<Login redirect={loadPage} />);
}



