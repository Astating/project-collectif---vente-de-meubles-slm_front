import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App';
import Navigation from './components/Navbar/Navbar';
// import Favorites from './components/Favorites/Favorites';
// import Cart from './components/Cart/Cart';
// import Account from './components/Account/Account';
import Admin from './components/Admin/Admin';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={App} />
        {/* <Route path='/favorites' element={Favorites} />
        <Route path='/cart' element={Cart} />
        <Route path='/account' element={Account} /> */}
        <Route path='/admin' element={Admin} /> 
      </Routes>
    </Router>  
    
  </React.StrictMode>,
  document.getElementById('root')
);