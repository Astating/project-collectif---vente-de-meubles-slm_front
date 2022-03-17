import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//ligne ci-dessous permet la navigation entre les pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import des composants dans index pour la gestion du router
import App from "./App.js"; //équivalent du home
import Navigation from "./components/Navbar/Navbar";
import Admin from "./components/Admin/Admin";
import ProductPage from "./ProductPage";

import Footer from "./components/footer/Footer.js";
// import Favorites from './components/Favorites/Favorites';
import Cart from "./components/Cart/Cart.js";
import Account from "./components/Account/Account.js";
import CatalogForm from "./components/Admin/Form";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/account/" element={<Account />} />
      <Route path="/cart/" element={<Cart />} />
      <Route path="/form/" element={<CatalogForm />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);
