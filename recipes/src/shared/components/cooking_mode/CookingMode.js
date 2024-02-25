import React, { useState } from 'react';
import { Button, Modal, Carousel } from 'react-bootstrap';
import './CookingMode.css';

export default function CookingModeDisplay({ instructionArr }) {
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(0);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Button onClick={handleShow}>Cooking Mode</Button>

            <Modal show={showModal} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cooking Mode</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        interval={null}
                        data-bs-theme="dark"
                    >
                        {instructionArr.map((page, i) => (
                            <Carousel.Item key={i}>
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
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant='primary'
                        onClick={() => handleSelect(index - 1)}
                        disabled={index === 0}
                    >
                        Previous
                    </Button>
                    <Button
                        variant='primary'
                        onClick={() => handleSelect(index + 1)}
                        disabled={index === instructionArr.length - 1}
                    >
                        Next
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
