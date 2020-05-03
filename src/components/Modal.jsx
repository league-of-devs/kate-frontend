import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import Success from "./Success";

export default function Modal(props) {
  let close = props.close;
  let isOpen = props.isOpen;
  if (typeof props.isOpen == 'undefined') isOpen = false;
  if (typeof props.onClose != 'undefined') close = true;

  const end = props.close && !props.title ? "end" : "";
  const titleClass = `modal--title ${end}`;
  const modalClass = `modal ${props.type}`
  return isOpen ? (
    <div className={modalClass}>
      {(close || props.title) && !props.success && (
        <div className={titleClass}>
          {props.title && <span> {props.title} </span>}
          {props.close && (
            <Button color="danger" type="rounded" icon={faTimes} onClick={props.onClose}/>
          )}
        </div>
      )}
      <div className="modal--content">
        {props.success && (
          <Success isSuccess message={props.message || 'Sucesso!'}/>
        )}
        {props.children}
        {props.success && (
          <Button
            color="secondary"
            onClick={props.onClose}
          >Ok</Button>
        )}
      </div>
    </div>
  ) : null;
}
