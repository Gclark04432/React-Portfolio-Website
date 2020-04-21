import React from 'react';
import './NavBar.css';

function NavBar() {

  // Get the container element

// Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
  return(
      <ul className="navbar-list">
        <li className="navbar-list-item active">Home Page</li>
        <li className="navbar-list-item">About Me</li>
        <li className="navbar-list-item">Projects</li>
        <li className="navbar-list-item">Contact Info</li>
      </ul>
  )

}

export default NavBar
