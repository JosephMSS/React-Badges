import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import './styles/Navbar.css'
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Navbar">
          <div className="container-fluid">
            <Link className='Navbar__brand text-decoration-none' to="/">
              <img className='Navbar__brand-logo' src={logo} alt="logo" />
              <span className="fw-light">Platzi</span>
            <span className="fw-bold">Conf</span>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Navbar;
