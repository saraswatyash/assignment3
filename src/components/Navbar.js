import React from 'react';
import { Link } from "react-router-dom";
const navbar=()=>{
    return(
        <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey lighten-1">  
            <ul className="right hide-on-med-and-down">
              <li><Link to="/covid19">Covid 19</Link></li>
              <li><Link to="/weather">Weather</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
}
export default navbar;