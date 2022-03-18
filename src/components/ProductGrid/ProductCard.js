import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ name, type, image, price, id, ...props }) {
  return (
    <Card className="mx-auto" as="figure" style={{ width: "18rem" }} >
      <Card.Img variant="top" src={`http://192.168.1.11:8000/media/${image}`} />
      <Card.Body as="figcaption" className="p-2">
        <Card.Title className="text-ellipsis" title={name}>
          <Link to={`product/${id}`}>{name}</Link>
        </Card.Title>
        <Stack direction="horizontal" gap="2">
          <Card.Subtitle className="text-muted">{type}</Card.Subtitle>
          <Card.Subtitle className="ms-auto">{price + " 🐚"}</Card.Subtitle>
          <Button href="/Cart" variant="success">ADD TO CART</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;