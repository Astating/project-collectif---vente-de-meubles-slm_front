import React from "react";
import "./ProductCard.css";
import ProductCard from "./ProductCard.js";
import { Container, Row, Col } from "react-bootstrap";


const ProductGrid = ({catalogue}) => {

    return (
        <Container>
            <Row>
                {catalogue.map((product) => {
                    return (
                    <Col xs={12} md={6} lg={4}>
                    <ProductCard name={product.name} type={product.type} price={product.price} imgSrc={product.imgSrc}/>
                    </Col>
                    )
                })}
            </Row>
        </Container>
    )
}


export default ProductGrid;