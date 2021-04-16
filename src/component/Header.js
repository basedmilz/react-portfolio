import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"> <Link to="/home">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects">
                <a className="nav-link" href="#">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume">
                <a className="nav-link" href="#">Resume</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link" href="#" >Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Header;