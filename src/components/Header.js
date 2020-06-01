import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo.png";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link smooth to="#home">
              <img src={logo} width="120px" alt="Artysan"/>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            ><FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link smooth to="#home">Home</Link>
            </li>
            <li>
              <Link smooth to="#about">About</Link>
            </li>
            <li>
              <Link smooth to="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link smooth to="#service">Services</Link>
            </li>
            <li>
              <Link smooth to="#blog">Blog</Link>
            </li>
            <li>
              <Link smooth to="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}