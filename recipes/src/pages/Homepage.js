
import React from 'react';
import './Homepage.css';
import chickenandrice from '../img/food/chickenandrice.jpg';
import chocchip from '../img/food/choc_chip_cookies.jpg';
import nmeatpie from '../img/food/nigerian_meatpie.jpg';
import guac from '../img/food/guac.jpg';
import pesto from '../img/food/pesto.jpg';
import jambalaya from '../img/food/jambalaya.jpg';
import dumplings from '../img/food/soup_dumplings.jpg';
import pho from '../img/food/pho.jpg';

import { Container, Row, Col, Card } from 'react-bootstrap';

function RecipeCard(title, imageSrc, description, url) {
  return (
    <Card className="recipe-card" border="primary">
      <Card.Img className="card-image" variant="top" src={imageSrc} alt={title} />
      <Card.Body className="card-body">
        <a href={url}>
          <Card.Title>{title}</Card.Title>
        </a>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function ContainerCards() {
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <Row>
        <Col className="card-column">{RecipeCard("Halal Guys Chicken and Rice", chickenandrice, "A popular street food dish featuring seasoned grilled chicken served over a bed of flavorful rice, accompanied by a medley of vegetables and topped with their signature white and hot sauces.", "/recipe1")}</Col>
        <Col className="card-column">{RecipeCard("Guacamole", guac, "A traditional dip in Mexican cuisine, often accompanying dishes like tacos, nachos, or served with tortilla chips.", "/recipe2")}</Col>
      </Row>
      <Row>
        <Col className="card-column">{RecipeCard("Pasta with Pesto", pesto, "A classic Italian dish that combines al dente pasta with a vibrant pesto sauce made from fresh basil, garlic, pine nuts, Parmesan cheese, and olive oil.", "/recipe3")}</Col>
        <Col className="card-column">{RecipeCard("Nigerian Meat Pies", nmeatpie, "Savory pastry snacks filled with seasoned minced meat, vegetables, and spices, often enjoyed as a popular street food or party snack in Nigeria.", "/recipe4")}</Col>
      </Row>
      <Row>
        <Col className="card-column">{RecipeCard("Chocolate Chip Cookies", chocchip, "A classic chocolatey sweet indulgence.", "/recipe5")}</Col>
        <Col className="card-column">{RecipeCard("Creole Jambalaya", jambalaya, "A soulful and savory dish deeply rooted in Louisiana's culinary culture, known for its harmonious blend of aromatic spices and a medley of meats, reflecting the rich and diverse heritage of Creole cooking.", "/recipe6")}</Col>
      </Row>
      <Row>
        <Col className="card-column">{RecipeCard("Soup Dumplings", dumplings, "A revered Chinese delicacy, Xiao Long Bao are meticulously crafted steamed dumplings cherished for their delicate skins and the delightful surprise of savory broth within each bite.", "/recipe7")}</Col>
        <Col className="card-column">{RecipeCard("Pho", pho, "A beloved Vietnamese dish, its fragrant broth and slender rice noodles creates a soul-warming experience that embodies the essence of Vietnamese culinary tradition.", "/recipe8")}</Col>
      </Row>
    </Container>
  );
}

export default ContainerCards;
