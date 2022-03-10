import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import des composants dans index pour la gestion du router
import App from './App'; //équivalent du home
import Navigation from './components/Navbar/Navbar';
import Admin from './components/Admin/Admin';
import Footer from './components/Footer';
// import Favorites from './components/Favorites/Favorites';
// import Cart from './components/Cart/Cart';
// import Account from './components/Account/Account';


ReactDOM.render(
  
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
    </Router >,
  
  document.getElementById('root')
);