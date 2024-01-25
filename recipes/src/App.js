import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';

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
    <Accordion defaultActiveKey={0}>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Recipe 1</Accordion.Header>
        <Accordion.Body>
          <img src="https://design4users.com/wp-content/uploads/2023/03/food-illustration-helen-lee.jpg" alt="Recipe Image" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2>Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking method</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='1'>
        <Accordion.Header>Recipe 2</Accordion.Header>
        <Accordion.Body>
          <img src="https://design4users.com/wp-content/uploads/2023/03/food-illustration-helen-lee.jpg" alt="Recipe Image" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2>Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking method</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Recipe 3</Accordion.Header>
        <Accordion.Body>
          <img src="https://design4users.com/wp-content/uploads/2023/03/food-illustration-helen-lee.jpg" alt="Recipe Image" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2>Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking method</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Recipe 4</Accordion.Header>
        <Accordion.Body>
          <img src="https://design4users.com/wp-content/uploads/2023/03/food-illustration-helen-lee.jpg" alt="Recipe Image" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2>Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking method</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Recipe 5</Accordion.Header>
        <Accordion.Body>
          <img src="https://design4users.com/wp-content/uploads/2023/03/food-illustration-helen-lee.jpg" alt="Recipe Image" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2>Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking method</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>Recipe 6</Accordion.Header>
        <Accordion.Body>
          <img src="https://design4users.com/wp-content/uploads/2023/03/food-illustration-helen-lee.jpg" alt="Recipe Image" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2>Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking method</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='6'>
        <Accordion.Header>Recipe 7</Accordion.Header>
        <Accordion.Body>
          <img src="https://design4users.com/wp-content/uploads/2023/03/food-illustration-helen-lee.jpg" alt="Recipe Image" class="center scaled-image padded-image"/>
          <div class="container">
            <div class="column1">
                <h2>Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div class="column2">
                <h2>Cooking method</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
export default RecipeAccordion;