import {useState} from 'react';
export default function GroceryItemContainer(){
    let items = [];
    return(
        <>
            <div className="">
                {items}
            </div>
        </>
    );
}
function addItem(){
    return (GroceryItem("Placeholder",false));
}
function GroceryItem({text}){
    const data = text;
    let status = false;
    return(
        <div>
            <radio>
            </radio>
            <p>{data}</p>
        </div>
    );
}