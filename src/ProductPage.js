import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./ProductPage.css";
import axios from "axios";

const ProductPage = () => {
  //const { id } = useParams();
  /*   const [product] = catalog.filter((n) => n.id.toString() === id);
  console.log([product]); */

  /* Déclarer une variable State de React 
  (à gauche : variable qui correspond à la valeur initale; 
    à droite : méthode qui gère la réassignation de valeur)*/
  const [item, setItem] = useState([]);
  console.log("cata", item);
  const url = "http://192.168.1.29:8000/catalog/";

  useEffect(() => {
    let cancel = false;
    axios.get(url).then((res) => {
      // on vérifie si cancel est true, si oui, fait rien. si non, lance le code.
      if (cancel) return;
      setItem(res.data);
    });
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col className="bg-warning image-container" md={8}>
          <img
            id="product-image"
            alt=""
            src="https://www.pokepedia.fr/images/2/20/Salam%C3%A8che-PDMDX.png"
          />
        </Col>
        <Col md={4}>
          <aside>
            {/*  <h3>{item.map((i) => i.title)}</h3> */}
            <h3>{item[2].title}</h3>
            <h1>Hellp</h1>
            <p>Dimensions: {item[2].dimension}</p>
            <p>Type: {item[2].type}</p>
            <p>Material: {item[2].material}</p>
            <p>Color: {item[2].color}</p>
            <p>Condition: {item[2].condition}</p>
            <p>{item[2].stock ? "EN STOCK!" : "RUPTURE DE STOCK!"}</p>
          </aside>
        </Col>
      </Row>
      <Row>
        <p>{item[2].description}</p>
      </Row>
    </Container>
  );
};
export default ProductPage;
