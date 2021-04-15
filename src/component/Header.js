import React from 'react'

 function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


export default Header;