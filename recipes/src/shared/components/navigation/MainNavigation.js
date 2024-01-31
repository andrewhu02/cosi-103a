import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './MainNavigation.css'; // Import the stylesheet

function MainNavigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary nav-container">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#homepage">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown title="Recipes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#all-recipes">All recipes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#recipe1">
                Halal Guys Chicken and Rice
              </NavDropdown.Item>
              <NavDropdown.Item href="#recipe2">
                Guacamole
              </NavDropdown.Item>
              <NavDropdown.Item href="#recipe3">
                Pasta With Pesto
              </NavDropdown.Item>
              <NavDropdown.Item href="#recipe4">
                Nigerian Meat Pies
              </NavDropdown.Item>
              <NavDropdown.Item href="#recipe5">
                Chocolate Chip Cookies
              </NavDropdown.Item>
              <NavDropdown.Item href="#recipe6">
                Creole Jambalaya
              </NavDropdown.Item>
              <NavDropdown.Item href="#recipe7">
                Soup Dumplings
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about-us">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavigation;