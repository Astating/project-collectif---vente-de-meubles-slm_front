import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function ProductCard({ name, type, imgSrc, price, currency, ...props }) {
  return (
    <Card as="figure" style={{ width: "18rem" }} border="danger">
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body as="figcaption" className="p-2">
        <Card.Title className="text-ellipsis" title={name}>
          {name}
        </Card.Title>
        <Stack direction="horizontal" gap="2">
          <Card.Subtitle className="text-muted">{type}</Card.Subtitle>
          <Card.Subtitle className="ms-auto">{price + " " + currency}</Card.Subtitle>
          <Button variant="success">BUY!</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
