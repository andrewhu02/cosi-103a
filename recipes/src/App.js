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
        <Accordion.Header>Accordion Header Text</Accordion.Header>
        <Accordion.Body>
          Accordion body text.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Accordion Header Text</Accordion.Header>
        <Accordion.Body>
          Accordion body text.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
export default RecipeAccordion;
