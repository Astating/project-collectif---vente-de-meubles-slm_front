import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import des composants dans index pour la gestion du router
import App from "./App.js"; //équivalent du home
import Navigation from "./components/Navbar/Navbar";
import Admin from "./components/Admin/Admin";
import ProductPage from "./ProductPage";
<<<<<<< HEAD
import Footer from "./components/footer/Footer.js";
=======
import Footer from "./components/Footer.js";
>>>>>>> 019796a28eae5b3433337441a65c438d9efda1d9
// import Favorites from './components/Favorites/Favorites';
// import Cart from './components/Cart/Cart';
// import Account from './components/Account/Account';

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);
