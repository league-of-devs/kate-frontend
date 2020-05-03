import React from "react";
export default function Card(props) {
    const ask = props.ask
  return (
    <div className={props.red ? "card red" : "card"}>
        {props.children} 
        {props.ask && <span className="ask">
        
        Por {ask.clientName}
        {ask.date}
        
        </span>}
    </div>
  );
}
