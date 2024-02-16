import React, { useState } from 'react';
import { Carousel }from 'react-bootstrap';

export default function CookingModeDisplay(pageArr){

    const pages = pageArr.map(page => {
        <step title={page.part} content={page.instruction} num={page.num}/>
    })
    return(
        <Carousel>
            {pages}
        </Carousel>
    )

}

function step(title,content,num){
    return (
        <Carousel.Item>
            <h1>{title}</h1>
            <h2>Step {num}</h2>
            <p>{content}</p>
        </Carousel.Item>
    )
}