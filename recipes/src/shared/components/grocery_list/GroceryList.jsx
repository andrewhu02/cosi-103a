import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button'; 
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function GroceryList({ show, handleClose }) {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState({ name: '', quantity: '' });

  const handleClearList = () => {
    setIngredients([]);
  };

  const handleAddIngredient = () => {
    if (newIngredient.name && newIngredient.quantity) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient({ name: '', quantity: '' });
    }
  };

  const handleDeleteIngredient = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIngredient((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Grocery List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ingredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.quantity}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDeleteIngredient(index)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Ingredient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ingredient name"
                name="name"
                value={newIngredient.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter quantity"
                name="quantity"
                value={newIngredient.quantity}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddIngredient}>
              Add Ingredient
            </Button>
          </Form>
          <Button variant="danger" onClick={handleClearList}>
            Clear List
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
