
import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">En title</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">New exercise</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">New User</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
  }

export default NavbarComponent