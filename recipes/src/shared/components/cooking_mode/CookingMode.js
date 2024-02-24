import React, { useState } from 'react';
import './CookingMode.css'
import {Button, Modal, Carousel}from 'react-bootstrap';

export default function CookingModeDisplay({instructionArr}){
    //controls the visibility
    const [showModal, setShowModal] = useState(false);
    const exampleSteps =[
        {
            title: 'Part 1',
            desc: 'this is step 1',
            num: 1
        },
        {
            title: 'Part 1',
            desc: 'this is step 2',
            num: 2
        },
        {
            title: 'Part 1',
            desc: 'this is step 3',
            num: 3
        },
        {
            title: 'Part 2',
            desc: 'this is step 1',
            num: 1
        }
    ];
    
   function handleClose(){
        setShowModal(false);
   }
   function handleShow(){
        setShowModal(true);
        console.log({instructionArr})
   }
    return(
    <div >
        <Button  onClick={handleShow}>
            Cooking Mode
        </Button>
        <Modal show={showModal} fullscreen={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cooking Mode</Modal.Title>
            </Modal.Header>          
            <Modal.Body>
                {/* interval = null makes it not automatically scroll */}
                <Carousel interval={null}  data-bs-theme="dark">
                    {instructionArr.map(page => (
                    <Carousel.Item>
                        <div className='stepItem'>
                        <h1>{page.title}</h1>
                        <h3>{page.desc}</h3>
                        </div> 
                        <Carousel.Caption>
                            <p>Step {page.num}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    ))}
               </Carousel>
            </Modal.Body>
        </Modal>
        </div>
    )

}
