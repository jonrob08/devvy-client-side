import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../assets/images/brand.png';
import Typography from '@material-ui/core/Typography';


function Topnav() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <div className="brand__font">
              <img className="m-3" src={require("../assets/images/brand.png")} alt="logo" width="100em" />
              d e v v y
            </div>

          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  {/* <span className="sr-only">(current)</span> */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
}


export default Topnav;