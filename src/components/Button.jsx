import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Button(props) {
    const buttonClass = `button ${props.type} ${props.color}`
  return (
    <div className={buttonClass}>
        {props.label && <span> {props.label} </span>}
        {props.icon && <FontAwesomeIcon className="icon" icon={props.icon} /> }  
        {props.sup && <span className="sup">{props.sup}</span>}
    </div>
  );
}
