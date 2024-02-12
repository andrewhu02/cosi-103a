import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';

export default function GroceryList({show, handleClose}) {
  const [num, setNum] = useState(0);

  function handleClick () {
    setNum(num+1);
  }

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button onClick={handleClick}>Increment</Button>
          <p>{num}</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}