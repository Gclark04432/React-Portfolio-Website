import React from 'react';
import './NavBar.css';
import {
  Link
} from "react-router-dom";


function NavBar() {
  return(
      <ul className="navbar-list">
        <Link to="/" className="navbar-list-item active">Home Page</Link>
        <Link to="/about" className="navbar-list-item">About Me</Link>
        <Link to="/projects" className="navbar-list-item">Projects</Link>
        <Link to="contact" className="navbar-list-item">Contact Info</Link>
      </ul>
  )

}

export default NavBar
