import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/button";
import axios from "axios";
import { Alert } from "react-bootstrap";

const CatalogForm = () => {
  const [formValue, setformValue] = useState({ name: "" });
  const [selectedFile, setSelectedFile] = useState(null);

  const url = "http://192.168.1.11:8000/catalog/";

  /*  const changeImageHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  }; */

  const handleChange = (e) => {
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    //POST method to add new items to the database.
    <>
      <Form
        method="POST"
        action="http://192.168.1.11:8000/catalog/"
        /* onSubmit={handleEvent} */
      >
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
        <select name="type" value={formValue.type} onChange={handleChange}>
          <option value="Bed">Bed</option>
          <option value="Table">Table</option>
          <option value="Couch">Couch</option>
          <option value="Closet">Closet</option>
          <option value="Chair">Chair</option>
        </select>
        <select name="color" value={formValue.color} onChange={handleChange}>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Grey">Grey</option>
          <option value="Brown">Brown</option>
          <option value="Yellow">Yellow</option>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Pink">Pink</option>
          <option value="Green">Green</option>
        </select>
        <select
          name="condition"
          value={formValue.condition}
          onChange={handleChange}
        >
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Used">Used</option>
          <option value="Old">Old</option>
        </select>
        <select
          name="material"
          value={formValue.material}
          onChange={handleChange}
        >
          <option value="Wood">Wood</option>
          <option value="Metal">Metal</option>
          <option value="Plastic">Plastic</option>
          <option value="Leather">Leather</option>
          <option value="Wool">Wool</option>
          <option value="Marbel">Marbel</option>
          <option value="Cloth">Cloth</option>
          <option value="Suede">Suede</option>
        </select>

        <input
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          placeholder="add an image"
          value={formValue.image}
          //onChange={handleChange}
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />
        <button type="submit" /* onClick={handleSubmit} */>Submit</button>
      </Form>
    </>
  );
};

export default CatalogForm;
