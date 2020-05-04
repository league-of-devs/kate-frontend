import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import Search from "./Search";
import logoImg from "../assets/img/logo.png";

export default function Home(props) {

  const user = useSelector(state => state.User);

  return (
    <header  className={props.type === "auth" ? "header big" : "header"} >
      <div className="container">
        <div className="header--kate">
          <img src={logoImg}alt="logoImg"/>  
        </div>
        {props.type !== "auth" && <>
          {props.type === "productsPage" && <Search value={props.search} callback={e => props.callback(e)}/> }
          <Link to="/config">
            <div className="header--user">
              <span>{user.name.split(" ")[0]}</span>
              <FontAwesomeIcon className="icon" icon={faUserCircle} size="2x" />
            </div>
          </Link>
        </>
        
        }
      </div>
    </header>
  );
}
