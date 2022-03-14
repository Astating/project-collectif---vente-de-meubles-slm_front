import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./ProductPage.css";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [catalog, setCatalog] = useState([{}]);
  const url = "http://192.168.1.29:8000/catalog/";
  axios.get(url).then((res) => {
    res.data.map((i) => {
      setCatalog(res.data[i]);
    });

    /*  res.map((e) => {
        setCatalog({ item: res.data[e] });
      }); */
    console.log(res.data);
    console.log(catalog);

    /*  axios.get(url).then((res) => {
    const dataJson = JSON.parse(JSON.stringify(res.data));
    setCatalog(dataJson); */
    /*  res.map((e) => {
      setCatalog({ item: res.data[e] });
    }); */

    //console.log(catalog);
  });

  /*   const [product] = catalog.filter((n) => n.id.toString() === id);
  console.log([product]); */

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
        {/*         <p>{product.description}</p>
         */}{" "}
      </Row>
    </Container>
  );
};

export default ProductPage;
