import React from "react";


export default function Products(props){
    return (
    <>
        <div className="product">
            <div className="product--image">
                <img src={props.img} alt="product-image"/>
            </div>
            <span className="product--title">{props.name}</span>
            <button className="product--button"> ver dados </button>
        </div>
    </>
    );
};
