import React, { useEffect, useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function RecipeCard({ title, imageSrc, description, url }) {
  const defaultImage = '/img/food/food.jpg';
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageSrc || defaultImage}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component="a" href={url}>View Recipe</Button>
      </CardActions>
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
