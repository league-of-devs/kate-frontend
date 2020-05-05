import React from "react";
export default function AnsweredInfo(props) {
  const prefix =
    props.type === "question"
      ? ["Padrão", "Perguntas parecidas"]
      : ["Atraso", "Taxa de gentileza", "Respondido por"];
  return (
    <div className="kate">
      <div className="info">
        <h1>{props.type === "answer" ? "Resposta" : "Pergunta"}</h1>
        <p>
          {prefix[0]}: {props.info[0]}
          {props.type === "answer" && "s"}
        </p>
        {
          (
            (props.type !== "answer" && props.info[1] !== 0) ||
          props.type === "answer") && (
            <p>
              {prefix[1]}:{" "}
              {props.type === "answer"
                ? props.info[1] * 100 + "%"
                : props.info[1]}
            </p>
          )}
        {props.type === "answer" && (
          <p>
            {prefix[2]}: {props.info[2]}
          </p>
        )}
      </div>
    </div>
  );
}
