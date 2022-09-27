import React from 'react'
import { Navbar, Container, Nav  } from 'react-bootstrap/';
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to="/"><Navbar.Brand>ProShop</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <LinkContainer to="/cart"><Nav.Link> <i className='fa-sharp fa-solid fa-cart-shopping'></i> Cart</Nav.Link></LinkContainer>
                <LinkContainer to="/login"><Nav.Link> <i class="fa-solid fa-user"></i> Sign In</Nav.Link></LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header