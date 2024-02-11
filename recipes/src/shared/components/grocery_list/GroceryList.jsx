import { useState } from 'react';
import { ButtonGroup, Button, Offcanvas, Stack, Form } from 'react-bootstrap';
//import GroceryItemContainer from './GroceryItemContainer';
export default function GroceryList({show, handleClose}) {
  const [num, setNum] = useState(0);
  const [items, setItems] = useState([]);
  let [newItem, setNewItem] = useState('');
  const [deletedItems, setDelete] = useState([]);
  function handleClick () {
    setNum(num+1);
  }
  function insertItem(){
    setItems([...items, 
      {
        name: newItem
      }])
    setNewItem(newItem ="");
  }
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack direction="horizontal" >
          <Form.Control placeholder="type in ingredient..."type='input' 
            value={newItem} onChange={e => setNewItem(e.target.value)}
          />
          <ButtonGroup>
            <Button onClick={insertItem}>+</Button>
         {/*   <Button onClick={handleClick}>Increment</Button> */}
          </ButtonGroup>
          </Stack>
         {/* <p>{num}</p> */}
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