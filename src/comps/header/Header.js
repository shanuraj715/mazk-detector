import React, { Component } from 'react'
import "./header.css";
import Logo from "../../assets/mask2.png";
import {Link} from "react-router-dom";
export default class Header extends Component {


  slide = () => {
 

   const slider = document.getElementById("slider");
   
     slider.classList.toggle("slideropen");
  
 
   

}

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="container-fluid navbar">
            <div className="container navinner">
              <div className="logo">
                <img src={Logo} className="logoimg" alt=""></img> 
          
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
                    <Link to="/api">API</Link>
                  </li>
                </ul>
              </div>
              <div className="burger " id="burger" onClick={this.slide} >
                <div className="burger-inner">
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div   id="slider" className="slider d-flex justify-content-center align-items-center flex-direction-row">
  
   <div className="bgg"> 
     
  </div>
    
    <ul className="sliderul">
      <li><a href="index.html" ><h6 >HOME</h6></a></li>
      <li><a href="getinvolved.html" ><h6 >About Us</h6></a></li>
      <li><a href="latestupdates.html" ><h6 >API</h6> </a></li>
      
      
     
    </ul>
 
   
    </div>
      </React.Fragment>
    );
  }
}
