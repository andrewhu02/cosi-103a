import React, { useEffect, useState } from 'react';
import './Homepage.css';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Container, Row, Col, Card } from 'react-bootstrap';

function RecipeCard({ title, imageSrc, description, url }) {
  const defaultImage = '/img/food/food.jpg';
  return (
    <Card sx={{ width: '80%', marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="350px"
        image={imageSrc || defaultImage}
        alt={title}
        sx={{ width: '100%', height: '350px' }} 
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
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
    <div className="homepage-container">
      <div className="card-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          recipeData.map((recipe, index) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              imageSrc={recipe.imageSrc}
              description={recipe.description}
              url={recipe.url}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Homepage;
