import React from "react";
import Navigation from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard";
// import Button from "./components/Button";
import Footer from "./components/Footer";


const App = () => {

  return (
    <>
      <Navigation />
      <ProductCard name="Étagère design en bois de sipalu" type="Étagère" imgSrc="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F44%2F42%2F16%2F4442160f7075914b80c234ded68013c0.jpg&sp=1646749985Ta83fd882e724b9d9396625b4e86f968772b4d962ac782fe3d1c9f60caffba4e0" price="140" currency="🐚" />
      <Footer />
    </>
  )
}
export default App;

