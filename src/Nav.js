import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

function Nav () {
  
    return (
        <nav>
          <h4> Movie App</h4>
          <ul className='nav-links'>
            <Link  to="/">
              <li>Home</li>
            </Link>
            
            <Link  to="/MovieList">
              <li>Movies</li>
            </Link>
            
            <Link  to="/about">
              <li >About</li>
            </Link>
          </ul>
         
          
        </nav>
    );
}

export default Nav ;