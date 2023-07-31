import Logo from "../assets/MIL.png";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./css files/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navlist-container">
              <Nav.Link href="/" className="nav-button">
                Home
              </Nav.Link>
              <Nav.Link href="wishlist" className="nav-button">
                Wishlist
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
