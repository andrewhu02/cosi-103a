import logo from './logo.svg';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';
import chickenandrice from './chickenandrice.jpg';
import food from './food.jpg';


function RecipeAccordion() {
  return (
    <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Recipe 1</Accordion.Header>
        <Accordion.Body>
          <img src={chickenandrice} alt="Sample Recipe" className="center scaled-image padded-image"/>
          <div className="container">
            <div className="column1">
                <h2 className= "subheader">Ingredients</h2>
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
            <div className="column2">
                <h2 className= "subheader">Cooking Instructions</h2>
                <p>Recipe taken from <a href="everylittlecrumb.com">everylittlecrumb.com</a></p>
                <p></p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey='1'>
        <Accordion.Header>Recipe 2</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" className="center scaled-image padded-image"/>
          <div className="container">
            <div className="column1">
                <h2 className= "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div className="column2">
                <h2 className= "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Recipe 3</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" className="center scaled-image padded-image"/>
          <div className="container">
            <div className="column1">
                <h2 className= "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div className="column2">
                <h2 className= "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>Recipe 4</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" className="center scaled-image padded-image"/>
          <div className="container">
            <div className="column1">
                <h2 className= "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div className="column2">
                <h2 className= "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Recipe 5</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" className="center scaled-image padded-image"/>
          <div className="container">
            <div className="column1">
                <h2 className= "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div className="column2">
                <h2 className= "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>Recipe 6</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" className="center scaled-image padded-image"/>
          <div className="container">
            <div className="column1">
                <h2 className= "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div className="column2">
                <h2 className= "subheader">Cooking Instructions</h2>
                <p>This is how to cook this dish...</p>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='6'>
        <Accordion.Header>Recipe 7</Accordion.Header>
        <Accordion.Body>
          <img src={food} alt="Sample Recipe" className="center scaled-image padded-image"/>
          <div className="container">
            <div className="column1">
                <h2 className= "subheader">Ingredients</h2>
                <ul>
                  <li>ingredient 1</li>
                  <li>ingredient 2</li>
                  <li>ingredient 3</li>
                </ul>
            </div>
            <div className="column2">
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