import React, { Component } from 'react'
import "./header.css";
import Logo from "../../assets/mask2.png";
import {Link} from "react-router-dom";


export default class Header extends Component {


  slide = () => {
   document.getElementById("slider").classList.toggle("slideropen");
    //  slider.classList.toggle("slideropen");
     document.body.classList.toggle("hiddenoverflow")
}

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="container-fluid navbar">
            <div className="container navinner">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} className="logoimg" alt=""></img>
                </Link>
              </div>
              <div className="list">
                <ul className="navlinks my-auto">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/how-to-use">
                      How To Use
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="burger " id="burger" onClick={this.slide}>
                <div className="burger-inner">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div
          id="slider"
          className="slider d-flex justify-content-center align-items-center flex-direction-row">
          <div className="bgg"></div>

          <ul className="sliderul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/how-to-use">
                How To Use
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
