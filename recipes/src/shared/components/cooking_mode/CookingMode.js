import React, { useState } from 'react';
import './CookingMode.css'
import {Button, Modal, Carousel}from 'react-bootstrap';

export default function CookingModeDisplay(){
    const [show, setShow] = useState(false);
    //const pages = stepsArr.map(page => {
     //   <step title={page.part} content={page.instruction} num={page.num}/>
   // })
   function handleClose(){
        setShow(false);
   }
   function handleShow(){
        setShow(true);
   }
    return(
    <>
        <Button onClick={handleShow}>
            Cooking Mode
        </Button>
        <Modal show={show} fullscreen={true}onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cooking Mode</Modal.Title>
            </Modal.Header>          
            <Modal.Body>
                <Carousel variant='dark'>
                    <Carousel.Item>
                        <div className='stepItem'>
                        <h1>part of recipe</h1>
                        <p>hello</p>
                        </div>
                    <Carousel.Caption>
                    <p>step number</p>
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
            </Modal.Body>
        </Modal>
        </>
    )

}
{/*}
function step(title,content,num){
    return (
        <Carousel.Item>
            <h1>{title}</h1>
            <h2>Step {num}</h2>
            <p>{content}</p>
        </Carousel.Item>
    )
}*/}