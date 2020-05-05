import React from "react";
export default function Card(props) {
  const ask = props.ask;

  function formatData(data = "2020-05-03T14:37:33.000Z"){
    let date = data.split("T")[0].replace("-","/").replace("-","/");
    let test = data.slice(11,16);
    return `Em ${date} - ${test}`;
  }
  return (
    <div className={props.red ? "card red" : "card"}>
      {props.children}
      {props.ask && (
        <>
          <h1>{ask.name}</h1>
          {ask.date && <span className="info">{props.ask && formatData(ask.date)}</span>}
        </>
      )}
    </div>
  );
}
