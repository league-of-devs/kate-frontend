import React from "react";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props) {
  const end = props.close && !props.title ? "end" : "";
  const titleClass = `modal--title ${end}`;
  return (
    <div className="modal">
      {(props.close || props.title) && (
        <div className={titleClass}>
          {props.title && <span> {props.title} </span>}
          {props.close && (
            <Button color="danger" type="rounded" icon={faTimes} />
          )}
        </div>
      )}

      
    </div>
  );
}
