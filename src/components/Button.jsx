import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Button(props) {
  let color = props.color;
  if(typeof props.color === 'undefined') color = 'secondary'
  
  let buttonClass = `button ${props.type} ${color}`
  if(typeof props.children === 'undefined') buttonClass += ' rounded'
  
  return (
    <div className={buttonClass} onClick={props.onClick}>
        {props.children && <span> {props.children} </span>}
        {props.icon && <FontAwesomeIcon className="icon" icon={props.icon} /> }  
        {props.sup && <span className="sup">{props.sup}</span>}
    </div>
  );
}
