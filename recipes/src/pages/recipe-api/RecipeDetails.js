import React, { useEffect, useState } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import RecipePageTemplate from './RecipePageTemplate.js'

// display all recipes from the API
const RecipeDetails = () => {
  // used to store fetched recipes 
  const [recipes, setRecipes] = useState([])
  // GET list of recipes from API
  useEffect(() => {
    fetch('/api/recipes', { method: 'GET' })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // the API returns an array of Objects, each is a recipe
        setRecipes(data);
      });
  }, []);
  let prev;
  // return element which displays recipes
  return (
    <div>
      <Container>
      {
      
      recipes.map(
        (recipeObject) => {
          if(recipeObject.id % 2 != 0 && recipeObject.id != recipes.length){
            prev = recipeObject;
          }
          else if(recipeObject.id === recipes.length){
        return (
          <Row>
            <Col>
              <RecipePageTemplate recipe={recipeObject} />
            </Col>
          </Row>
        )
      }
      else {
        return (
        <Row>
          <Col>
           <RecipePageTemplate recipe={prev} />
           <RecipePageTemplate recipe={recipeObject} />
          </Col>
        </Row>)
      }
      
        // create a page for each recipe using the templa
      })
    }
      </Container>
    </div>
  )
}

export default RecipeDetails;