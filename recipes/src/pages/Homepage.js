import '../App.css';
import Accordion from 'react-bootstrap/Accordion';
import chickenandrice from '../img/chickenandrice.jpg';
import food from '../img/food.jpg';
import chocchip from '../img/choc_chip_cookies.jpg';
import nmeatpie from '../img/nigerian_meatpie.jpg';
import nmeatpie2 from '../img/nigerian_meatpie_2.jpg';
import guac from '../img/guac.jpg';
import pesto from '../img/pesto.jpg'
import jambalaya from '../img/jambalaya.jpg';
import dumplings from '../img/soup_dumplings.jpg';
import pesto2 from '../img/pesto2.jpg';
import { Container, Row, Col, Card } from 'react-bootstrap';

function RecipeCard(title, imageSrc, description, url) {
  return (
    <Card border="primary" style={{ maxWidth: '60%', margin: '0 auto' }}>
      <Card.Img className = "thumbnail text-center" variant = "top" src = {imageSrc} alt = {title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Link href={url}>Recipe</Card.Link>
    </Card>
  );
}
function ContainerCards() {
  return (
    <Container fluid>
      <Row className="g-4">
        <Col>{RecipeCard("Halal Guys Chicken and Rice", chickenandrice, "Test", "/recipe1")}</Col>
        <Col>{RecipeCard("Guacamole", guac, "Test", "/recipe2")}</Col>
      </Row>
      <Row className="g-4">
        <Col>{RecipeCard("Pasta with Pesto", pesto, "Test", "/recipe3")}</Col>
        <Col>{RecipeCard("Nigerian Meat Pies", nmeatpie, "Test", "/recipe4")}</Col>
      </Row>
      <Row className="g-4">
        <Col>{RecipeCard("Chocolate Chip Cookies", chocchip, "Test", "/recipe5")}</Col>
        <Col>{RecipeCard("Creole Jambalaya", jambalaya, "Test", "/recipe6")}</Col>
      </Row>
      <Row className="g-4">
        <Col>{RecipeCard("Soup Dumplings", dumplings, "Test", "/recipe7")}</Col>
        <Col>{RecipeCard("Sample", food, "Test", "/url")}</Col>
      </Row>
    </Container>
  );
}

export default ContainerCards;