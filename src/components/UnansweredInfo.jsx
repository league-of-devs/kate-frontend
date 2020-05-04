import React from "react";

import Button from "./Button";
export default function AnsweredInfo(props) {
  return (
    <div className="kate">
      <div className="info">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <div className="action flex">
        {props.let && <Button color="success">Deixa com a Kate</Button>}
        <Button>Responder</Button>
      </div>
    </div>
  );
}
