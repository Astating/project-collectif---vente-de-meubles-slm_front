import React from "react"
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap"
import './Navbar.css'


const Navigation = () => {
    return (
      <>
        <Navbar id="navbar" expand="lg">
          <Container fluid>
              <Navbar.Brand href="#">SALEM</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
            {/* ci-dessous, le collapse sert si l'écran devient plus petit à regrouper la navbar et à faire un menu déroulant */}
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>

                  <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button id="search--button" variant="outline">Search</Button>
                  </Form>
                  
                  <Nav.Link href="#action2">
                  <img
                    id="favorites--icon"
                    src="../images/heart_icon.png" alt="heart icon"
                    width="20"
                    height="20"
                  />{' '}
                  Favorites
                </Nav.Link>
                    <Nav.Link href="#action3"><img
                    id="cart--icon"
                    src="../images/cart_icon.png" alt="cart icon"
                    width="30"
                    height="20"
                  />{' '}Cart</Nav.Link>
                    <Nav.Link href="#action4"><img
                    id="user--icon"
                    src="../images/pngegg.png" alt="user icon"
                    width="20"
                    height="20"
                  />{' '}Account</Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default Navigation;