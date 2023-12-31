import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./css files/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navlist-container">
              <Link to="/" className="nav-button">
                Home
              </Link>
              <Link to="/wishlist" className="nav-button">
                Wishlist
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
