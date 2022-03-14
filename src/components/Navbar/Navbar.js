import React from "react"
import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap"
import './Navbar.css'


const Navigation = () => {
    return (
      <>
        <Navbar id="navbar" expand="lg">
          <Container fluid>
              <Navbar.Brand href="#">
                <img
                src="../images/logo3.png" alt="Logo SLM"
                width="111"
                height="165"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
            {/* ci-dessous, le collapse sert si l'écran devient plus petit à regrouper la navbar et à faire un menu déroulant */}
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
              >

                <Nav.Link href="/">Home</Nav.Link>
                
                  <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button id="search--button" variant="outline">Search</Button>
                  </Form>
                  
                  <div class="header-r">

                  <Nav.Link href="/src/components/Favorites/Favorites.js">
                  <img
                    id="favorites--icon"
                    src="../images/heart_icon.png" alt="heart icon"
                    width="20"
                    height="20"
                  />{' '}
                  Favorites
                </Nav.Link>
                    <Nav.Link href="/src/components/Cart/Cart.js"><img
                    id="cart--icon"
                    src="../images/cart_icon.png" alt="cart icon"
                    width="30"
                    height="20"
                  />{' '}Cart</Nav.Link>
                    <Nav.Link href="/Account"><img
                    id="user--icon"
                    src="../images/pngegg.png" alt="user icon"
                    width="20"
                    height="20"
                />{' '}Account</Nav.Link>
                <Nav.Link
                  href="/admin"
                  className="nav-link">
                  Admin
                </Nav.Link>
                  </div>

                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    )
}

export default Navigation;