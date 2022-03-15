//cette page est l'équivalent du "Home" du site
//pas besoin d'y importer la navbar ni le footer car ils sont déjà dans index pour la navigation
import React, { useState, useEffect } from "react";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import BanniereHome from "./components/BanniereAccueil/BanniereAccueil";
import ProductPage from "./ProductPage";
import axios from "axios";
import { useParams } from "react-router-dom";

const App = () => {
  const [catalogue, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = "http://192.168.1.11:8000/catalog/";

  useEffect(() => {
    axios.get(url).then((res) => {
      // on vérifie si cancel est true, si oui, fait rien. si non, lance le code.
      setItem(res.data);
      setLoading(false);
    });
  }, []);

/*   const { id } = useParams();
  const [product] = item.filter((n) => n.id.toString() === id); */

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
 


  return (
    <>
      <BanniereHome />
      <ProductGrid catalogue={catalogue} />
    </>
  );}
};

export default App;
