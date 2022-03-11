import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductGrid = ({catalogue}) => {

    return (
        <Container className="bg-warning">
            <Row>
                {catalogue.map((product) => {
                    return (
                    <Col key={`${product.id}`}xs={12} md={6} lg={4}>
                    <ProductCard id={product.id} name={product.title} type={product.type} price={product.price} imgSrc={product.imgSrc}/>
                    </Col>
                    )
                })}
            </Row>
        </Container>
    )
}


export default ProductGrid;