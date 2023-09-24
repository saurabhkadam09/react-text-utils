import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={props.style}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode === "dark"?"light":"black"}`} to="/">{props.title}</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === "dark"?"light":"black"}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link text-${props.mode === "dark"?"light":"black"}`} to="/about">{props.about}</Link>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.mode === "dark"?"light":"black"}`} aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={props.handleMode}/>
            <label className={`form-check-label text-${props.mode === "dark"?"light":"black"}`} htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    about : PropTypes.string,
}

Navbar.defaultProps = {
    title : "SK",
    about: "About Us"
}

export default Navbar

