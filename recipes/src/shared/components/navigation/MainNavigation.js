// MainNavigation.js
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line
import { useState } from 'react';
import './MainNavigation.css'; // Import the stylesheet

function MainNavigation({ handleShowList, handleShowCook }) {
  const location = useLocation();
  const isRecipePage = location.pathname.startsWith('/recipe');

  return (
    <Navbar expand="sm" className="bg-body-tertiary nav-container sticky-top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/homepage">
              Home
            </Nav.Link>
            <NavDropdown title="Recipes" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/recipe1">
                Halal Guys Chicken and Rice
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipe2">
                Guacamole
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipe3">
                Pasta With Pesto
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipe4">
                Nigerian Meat Pies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipe5">
                Chocolate Chip Cookies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipe6">
                Creole Jambalaya
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipe7">
                Soup Dumplings
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/recipe8">
                Pho
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/add-new-recipe">Add a Recipe</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/all-recipes">All Recipes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
          </Nav>
          {isRecipePage && (
            <Button className="button" onClick={handleShowCook}>
              Cooking Mode
            </Button>
          )}
          <Button className="button" onClick={handleShowList}>
            Grocery List
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;
