import React, { Component } from 'react'
import aboutimg from "../../assets/about.png";
export default class Card extends Component {
    render() {
        return (
          <React.Fragment>
            <div className="col col-12 col-md-6 col-lg-3 cardcontainer text-center ">
              <div className="card" style={{ width: "100%" }}>
                <img
                  src={this.props.image}
                  className="card-img-top"
                  alt="..."
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{this.props.uname}</h5>
                  <p className="card-text">Student @JIMS rohini sec-5</p>
                  <a
                    target="_blank"
                    href={this.props.github || "/"}
                    className="btn  w-100"
                    style={{ backgroundColor: "#2C3E50", color: "#fff" }}
                  >
                    <i className="fab fa-github mx-2"></i>Github
                  </a>

                  <a
                    target="_blank"
                    href={this.props.instagram}
                    className="btn  w-100 mt-2"
                    style={{ backgroundColor: "#2C3E50", color: "#fff" }}
                  >
                    {" "}
                    <i className="fab fa-instagram mx-2"></i>
                    Instgram
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
    }
}
