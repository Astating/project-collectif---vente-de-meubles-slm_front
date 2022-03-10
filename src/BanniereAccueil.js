import React from "react";
import { Carousel } from "react-bootstrap"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BanniereHome() {
  return (
    <div>
      <Carousel className ="my-auto">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/img11.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/img22.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}