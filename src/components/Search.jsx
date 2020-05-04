import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Search(props) {
  return (
    <div className="search input-field">
        <input type="text" value={props.value} placeholder="Pesquisar anúncio..." onChange={e => {props.callback(e.target.value)}}/>
        <FontAwesomeIcon icon={faSearch} color="black"/>
    </div>
  );
}
