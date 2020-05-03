import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

import logoImg from '../assets/img/logo.png'

export default function Home(props) {
  return (
    <header  className={props.type === 'auth' ? 'header big' : 'header'} >
      <div className="container">
        <div className="header--kate">
          <img src={logoImg}alt="logoImg"/>  
        </div>
        {props.type !== 'auth' && <>
          {props.type === 'productsPage' && <Search /> }
          <Link to="/config">
          <div className="header--user">
            <span>Alex</span>
            <FontAwesomeIcon className="icon" icon={faUserCircle} size="2x" />
          </div>
          </Link>
        </>
        
        }
      </div>
    </header>
  );
}
