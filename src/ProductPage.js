import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./ProductPage.css";
import axios from "axios";

const ProductPage = () => {
  /* Déclarer une variable State de React 
  (à gauche : variable qui correspond à la valeur initale; 
    à droite : méthode qui gère la réassignation de valeur)*/
  const [item, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  console.log("cata", item);
  const url = "http://192.168.1.11:8000/catalog/";

  useEffect(() => {
    axios.get(url).then((res) => {
      // on vérifie si cancel est true, si oui, fait rien. si non, lance le code.
      setItem(res.data);
      setLoading(false);
    });
  }, []);

  const { id } = useParams();
  const [product] = item.filter((n) => n.id.toString() === id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
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
              <h3>{product.title}</h3>
              <p>Dimensions: {product.dimension}</p>
              <p>Type: {product.type}</p>
              <p>Material: {product.material}</p>
              <p>Color: {product.color}</p>
              <p>Condition: {product.condition}</p>
              <p>{product.stock ? "EN STOCK!" : "RUPTURE DE STOCK!"}</p>
            </aside>
          </Col>
        </Row>
        <Row>
          <p>{item[2].description}</p>
        </Row>
      </Container>
    );
  }
};
export default ProductPage;
