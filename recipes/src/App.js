import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import chickenandrice from './img/chickenandrice.jpg';
import food from './img/food.jpg';
import chocchip from './img/choc_chip_cookies.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function RecipeAccordion() {
  return (
    <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Recipe 1</Accordion.Header>
        <Accordion.Body>
          <img src={chickenandrice} alt="Sample Recipe" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2 class = "subheader">Ingredients</h2>
                <ul>
                  <li>2 lbs chicken thighs</li>
                  <li>1/4 cup olive oil</li>
                  <li>2 tablespoon lemon juice</li>
                  <li>1 tablespoon white vinegar</li>
                  <li>3 cloves garlic, minced</li>
                  <li>1 teaspoon salt, or to taste</li>
                  <li>1/2 teaspoon black pepper, or to taste</li>
                  <li>1 teaspoon oregano powder</li>
                  <li>1 teaspoon all spice</li>
                  <li>1/2 teaspoon ginger powder</li>
                  <li>1/2 teaspoon cumin powder</li>
                  <li>1/2 teaspoon paprika powder</li>
                </ul>
            </div>
            <div class="column2">
                <h2 class = "subheader">Cooking Instructions</h2>
                <p>Recipe taken from <a href="everylittlecrumb.com">everylittlecrumb.com</a></p>
                <p></p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='1'>
        <Accordion.Header>Recipe 2</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2 class = "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2 class = "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Recipe 3</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2 class = "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2 class = "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Recipe 4</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2 class = "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2 class = "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Recipe 5</Accordion.Header>
        <Accordion.Body>
          <img src={chocchip} alt="Sample Recipe" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2 class = "subheader">Ingredients</h2>
                <ul>
                  <li>3 cups of all purpose flour</li>
                  <li>1/2 tsp of baking powder</li>
                  <li>1/4 tsp of salt</li> 
                  <li>1/4 tsp of espresso powder</li>
                  <li>1 cup of plain white sugar</li>
                  <li>1 cup of brown sugar or molasses</li>
                  <li>1 cup of melted butter</li>
                  <li>2 eggs</li>
                  <li>1 tsp of vanilla extract</li>
                  <li>2 cups of chocolate chips/chunks</li>
                </ul>
            </div>
            <div class="column2">
                <h2 class = "subheader">Cooking Instructions</h2>
                <ol>
                  <li>Preheat the oven to 350 degrees, or you can start preheating after step 7, depends on your pace</li>
                  <li>If you haven’t already, prepare the melted butter by either melting it at a low heat in a pan on stove or melting it in the microwave</li>
                  <li>Cream the butter with the white sugar and brown sugar/molasses until both incorporated or about 2 - 3 minutes</li>
                  <li>Mix the eggs, with egg yolk and white, and the vanilla extract into the wet mixture</li>
                  <li>In a separate bowl combine and sift the dry ingredients (flour, salt, baking powder, espresso powder)</li>
                  <li>Gradually add in the dry ingredients into the wet mixture until incorporated</li>
                  <li>Stir in the chocolate chips until incorporated</li>
                  <li>While oven is preheating, shape small balls out of the dough and place on a 9 x 13 pan, 16 is usually expected</li>
                  <li>Once the oven is preheated, bake the cookies until 12 - 15 minutes</li>
                  <li>Take the cookies out of the oven and let them cool for at least 10 minutes</li>
                  <li>Enjoy!</li>
                </ol>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>Recipe 6</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2 class = "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2 class = "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='6'>
        <Accordion.Header>Recipe 7</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2 class = "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
export default RecipeAccordion;