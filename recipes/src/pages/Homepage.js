import React, { useEffect, useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function RecipeCard({ title, imageSrc, description, url }) {
  const defaultImage = '/img/food/food.jpg';
  return (
    <Card className="recipe-card" border="primary">
      <Card.Img className="card-image" variant="top" src={imageSrc || defaultImage} alt={title} />
      <Card.Body className="card-body">
        <Link to={url}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Homepage() {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/recipes', { method: 'GET' });
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipeData(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row>
          {recipeData.map((recipe) => (
            <Col key={recipe.id} className="card-column">
              <RecipeCard
                title={recipe.title}
                imageSrc={recipe.imageSrc}
                description={recipe.description}
                url={recipe.url}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Homepage;
