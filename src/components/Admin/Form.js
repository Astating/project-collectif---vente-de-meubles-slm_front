import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import axios from "axios";
import { Alert } from "react-bootstrap";

const CatalogForm = () => {
  const [formValue, setformValue] = useState({ key: "" });
  const url = "http://192.168.1.11:8000/catalog/";

  const handleSubmit = (e) => {
    axios
      .post(url, {
        ...formValue,
        [e.target.key]: e.target.value,
      })
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.key]: e.target.value,
    });
  };

  return (
    <Form method="POST" action="http://192.168.1.11:8000/catalog/">
      <p>Add an Item</p>
      <input
        type="text"
        name="title"
        placeholder="add a title"
        value={formValue.title}
        /* onChange={(data, key) => handleChange({ key: data })} */
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="add a description"
        value={formValue.description}
        onChange={handleChange}
      />
      <input
        type="image"
        name="image"
        placeholder="add an image"
        value={formValue.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="add a price"
        value={formValue.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="dimension"
        placeholder="add a dimension with this format 100 x 100 x 100"
        value={formValue.dimension}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="add a type"
        value={formValue.type}
        onChange={handleChange}
      />
      <input
        type="text"
        name="color"
        placeholder="add a color"
        value={formValue.color}
        onChange={handleChange}
      />
      <input
        type="text"
        name="condition"
        placeholder="add a condition"
        value={formValue.condition}
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        placeholder="add a material"
        value={formValue.material}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </Form>
  );
};

export default CatalogForm;
