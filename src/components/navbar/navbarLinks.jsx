import React from "react";
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return ( 
    <ul className="nav-links">
        <li className="nav-items">
          <Link to="/about" className="nav-link"> About</Link>
          <div className="nav-icon">
            <svg width="100%" height="100%" viewBox="0 0 102 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 39.7547H94M94 39.7547C94 39.7547 59 23.5 53 1M94 39.7547C94 39.7547 59 55 53 77.5" stroke="black" strokeWidth="6" /></svg>
          </div>
        </li>
        <li className="nav-items">
          <a>Project</a>
          <div className="nav-icon">
            <svg width="100%" height="100%" viewBox="0 0 102 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 39.7547H94M94 39.7547C94 39.7547 59 23.5 53 1M94 39.7547C94 39.7547 59 55 53 77.5" stroke="black" strokeWidth="6" /></svg>
          </div>
        </li>
        <li className="nav-items">
          <a>Insight</a>
          <div className="nav-icon">
            <svg width="100%" height="100%" viewBox="0 0 102 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 39.7547H94M94 39.7547C94 39.7547 59 23.5 53 1M94 39.7547C94 39.7547 59 55 53 77.5" stroke="black" strokeWidth="6" /></svg>
          </div>
        </li>
        <li className="nav-items">
          <a>Contact</a>
          <div className="nav-icon">
            <svg width="100%" height="100%" viewBox="0 0 102 79" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 39.7547H94M94 39.7547C94 39.7547 59 23.5 53 1M94 39.7547C94 39.7547 59 55 53 77.5" stroke="black" strokeWidth="6" /></svg>
          </div>
        </li>
      </ul>
   );
}
 
export default NavbarLinks;