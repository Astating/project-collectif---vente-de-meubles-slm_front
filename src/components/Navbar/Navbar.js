import React from "react"
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap"
import './Navbar.css'


const Navigation = () => {
    return (
      <>
        <Navbar  id="navbar" expand="lg" fixed='top'>
          <Container className = "container">
              <Navbar.Brand href="#">
                <img
                src="../images/logofinal.png" alt="Logo SLM"
                width="100"
                height="100"
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
                
                  <Form className="d-flex" variant="justify-content-end">
                  <FormControl 
                    type="search"
                    placeholder="Search"
                    className="me-auto"
                    aria-label="Search"
                  />

                
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
                    <Nav.Link href="/Cart"><img
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
                <Nav.Link href="/admin"><img
                  id="admin--icon"
                  src="../images/adminpng.png" alt="admin icon"
                  width="30"
                  height="20"
                  
                  />
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