import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Search() {
  return (
    <div className="search">
        <input type="text" placeholder="Pesquisar anúncio..."/>
        <FontAwesomeIcon icon={faSearch} color="black"/>
    </div>
  );
}
