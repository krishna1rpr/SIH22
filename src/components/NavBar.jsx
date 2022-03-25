import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import AppContext from "../store/context";
import LoginModal from "./LoginModal";

const NavBar = () => {
  const ctx = useContext(AppContext);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setShow(!show);
  };

  const logoutHandler = () => {
    ctx.logout();
    history.push("/");
  };

  return (
    <Navbar
      className="py-3"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>Weather Mass</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {ctx.isLoggedIn && (
              <Nav.Link as={Link} to="/alerts">
                Current alerts
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <NavDropdown title="View data" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/dist">
                District wise
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/state">
                State wise
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {ctx.isLoggedIn ? (
              <Button variant="primary" onClick={logoutHandler}>
                Logout
              </Button>
            ) : (
              <Button variant="primary" onClick={showModal}>
                Login
              </Button>
            )}
            {show && (
              <LoginModal show={show} showModal={showModal} setShow={setShow} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
