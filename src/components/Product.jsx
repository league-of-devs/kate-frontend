import React from "react";
import Button from './Button'

export default function Products(props){
    const product = props.prod;
    return (
    <>
        <div className="product">
            <div className="product--image">
                <img src={product.img} alt="product"/>
            </div>
            <span className="product--title" >{product.name}</span>
            <span className="product--price">{new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
            <Button label="ver dados" sup="2" color="secondary"/>  
        </div>
    </>
    );
};