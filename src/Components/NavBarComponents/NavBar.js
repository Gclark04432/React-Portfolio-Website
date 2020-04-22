import React from 'react';
import './NavBar.css';
import {
  Link
} from "react-router-dom";


function NavBar() {
  return(
    <section className="navbar">
      <p className="title"><span className="my-name">Gary Clark</span> <span className="my-title">| Software Developer</span></p>
      <ul className="navbar-list">
        <Link to="/" className="navbar-list-item active">Home Page</Link>
        <Link to="/about" className="navbar-list-item">About Me</Link>
        <Link to="/projects" className="navbar-list-item">Projects</Link>
        <Link to="contact" className="navbar-list-item">Contact Info</Link>
      </ul>
    </section>
  )

}

export default NavBar
