import React from "react";
//chaque fois qu'on utilise un élément de react bootstrap, il faut l'importer comme ci-dessous
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

//component ci-dessous à compléter/modifier une fois le lien avec l'API/BDD fait pour que le tableau se remplisse dynamiquement
export default function Admin() {
  const [catalogue, setItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = "http://192.168.1.11:8000/catalog/";

  useEffect(() => {
    axios.get(url).then((res) => {
      // on vérifie si cancel est true, si oui, fait rien. si non, lance le code.
      setItem(res.data);
      setLoading(false);
    });
  }, []);

  /*   const { id } = useParams();
  const [product] = item.filter((n) => n.id.toString() === id); */

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Material</th>
            <th>Type</th>
            <th>Dimension</th>
            <th>Color</th>
            <th>Image</th>
            <th>Condition</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        {catalogue.map((product) => {
          return (
            <tbody>
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.material}</td>
                <td>{product.type}</td>
                <td>{product.dimension}</td>
                <td>{product.color}</td>
                <td>{product.image}</td>
                <td>{product.condition}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Button variant="warning">Change</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    );
  }
}
