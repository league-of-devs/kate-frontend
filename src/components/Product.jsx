import React from "react";
import { useHistory } from "react-router-dom";

import Button from './Button'

export default function Products(props){
  const history = useHistory();
  const product = props.prod;

    return (
    <>
        <div className="product">
            <div className="product--image">
                <img src={product.picture} alt="product"/>
            </div>
            <span className="product--title text" >{product.title}</span>
            <span className="product--price">{new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
            <Button sup="2" color="secondary" onClick={()=>{history.push('/product')}}>Ver dados</Button>  
        </div>
    </>
    );
};