import React from 'react'
import { Navbar, Container, Nav  } from 'react-bootstrap/';

const Header = () => {
  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="/cart"> <i className='fa-sharp fa-solid fa-cart-shopping'></i> Cart</Nav.Link>
                <Nav.Link href="/login"> <i class="fa-solid fa-user"></i> Sign In</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header