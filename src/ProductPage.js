import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./ProductPage.css";
import axios from "axios";

const ProductPage = () => {
  //const { id } = useParams();
  /*   const [product] = catalog.filter((n) => n.id.toString() === id);
  console.log([product]); */
  const [item, setItem] = useState([]);
  console.log("cata", item);
  const url = "http://192.168.1.29:8000/catalog/";

  useEffect(() => {
    let cancel = false;
    axios.get(url).then((res) => {
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
            {/* <h3>{item.map((i) => i.title)}</h3> */}
            <h2>Hello</h2>

            {/*             <p>Dimensions: {product.dimension}</p>
            <p>Type: {product.type}</p>
            <p>Material: {product.material}</p>
            <p>Color: {product.color}</p>
            <p>Condition: {product.condition}</p>
            <p>{product.stock ? "EN STOCK!" : "RUPTURE DE STOCK!"}</p> */}
          </aside>
        </Col>
      </Row>
      <Row>{/* <p>{product.description}</p> */}</Row>
    </Container>
  );
  /*   } */
};
export default ProductPage;
