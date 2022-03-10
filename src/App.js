//cette page est l'équivalent du "Home" du site

import React from "react";
// import ProductCard from "./components/ProductCard";
// import Button from "./components/Button";
import ProductGrid from "./components/ProductGrid"
import Footer from "./components/Footer";


const App = () => {

  const catalogue = [
    {
      name: "Étagère en bois de sipalu",
      type: "Étagère",
      imgSrc: "https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "1700"
      
    },
    { 
      name:"Canapé cuire Ikéa",
      type:"Canapé",
      imgSrc:"https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "1205"
    },
    {
      name:"Table en marbre",
      type: "Table",
      imgSrc: "https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "6000"
    },
    {
      name: "Une chaise ordinaire",
      type: "Chaise",
      imgSrc: "https://www.lepetitflorilege.com/1742-large_default/etagere-ronde-en-bois.jpg",
      price: "25"
    }
  ]

  return (
    <>
      <ProductGrid catalogue={catalogue}/>
      <Footer />
    </>
  )
}
export default App;

