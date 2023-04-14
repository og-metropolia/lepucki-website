import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
// import Navi from './components/Navi';
// import Login from './components/Login';
// import Pyykkitupa from './pages/Pyykkitupa';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
