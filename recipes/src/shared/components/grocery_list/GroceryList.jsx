import { useState } from 'react';
import { ButtonGroup, Button, Offcanvas, Stack, Form } from 'react-bootstrap';
//import GroceryItemContainer from './GroceryItemContainer';
export default function GroceryList({show, handleClose}) {
  const [num, setNum] = useState(0);
  const [items, setItems] = useState([]);
  function handleClick () {
    setNum(num+1);
  }
  function addItem(){
    setItems([...items, {name: "test"}]);
  }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ButtonGroup>
            <Button onClick={addItem}>+</Button>
         {/*   <Button onClick={handleClick}>Increment</Button> */}
          </ButtonGroup>
          <p>{num}</p>
          <GroceryItemContainer itemArr={items}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function GroceryItemContainer({itemArr}){
  const listItems = itemArr.map(
    item => <GroceryItem info={item.name}/>);
  return(
      <>
          <div className="">
            <Stack gap={3}>
              {listItems}
            </Stack> 
          </div>
      </>
  );
  
}

function GroceryItem({info}){
  return(
    <>
      <div>
      <Stack direction="horizontal">
        <Form.Check className="me-auto" type ="checkbox" />
        <div className="me-auto">
          {info}
        </div></Stack>
      </div>
    </>
  )
}