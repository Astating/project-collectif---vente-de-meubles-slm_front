import React from "react";
//import {form.Control} from "react-bootstrap"
//import {form.Group} from "react-bootstrap"
import { Form, Col, Row, Button } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Account (){

  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const url = "http://192.168.1.11:8000/user/";

  useEffect(() => {
    axios.get(url).then((res) => {
      // on vérifie si cancel est true, si oui, fait rien. si non, lance le code.
      setUser(res.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
    <Form>
          <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridPseudo">
      <Form.Label> Pseudo </Form.Label>
      <Form.Control placeholder="Enter pseudo"></Form.Control>
    </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    </Row>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control placeholder="Enter zip code"></Form.Control>
    </Form.Group>
  </Row>
  <FloatingLabel controlId="floatingTextarea2" label="Bio">
    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '150px' }}
    />
  </FloatingLabel>
  <center><Button variant="primary" type="submit">
    Submit
  </Button></center>
</Form>
    )}
}