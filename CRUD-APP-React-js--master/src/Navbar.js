import React from 'react'
import { NavLink , Link } from 'react-router-dom'

function Navbar() {
    return (

        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link"exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"exact to="/about">About</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link"exact to="/contact">Contact</NavLink>
        </li>
        <form class="d-flex">
        <Link  className="btn btn-outline-success form-control me-2 my-2"exact to="/adduser">Add Employee</Link>
        </form>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
