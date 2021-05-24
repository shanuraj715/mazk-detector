import React, { Component } from 'react';
import Header from "../../comps/header/Header";
import Footer from "../../comps/footer/Footer";
import Helmet from "react-helmet";
import Mainbg from "../../assets/mainimg.svg";

class Home extends Component {


  componentDidMount() {
    console.log("page visible");
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Face Detector | Home</title>
        </Helmet>
        <Header />
        <section>
          <div className="container mainsection">
            <div className="row">
              <div className="col col-12 col-lg-6 ">
                <div className="writings my-auto">
                  <h1 className="mainheading">Mask Detector</h1>
                  <h5 className="secondheading">
                    <span>Wear Your Mask </span>or
                  </h5>
                  <h5 className="secondheading"> Bear The Consequences</h5>
                  <button type="button" className="btn mainbtn">
                    Start Detecting
                  </button>
                </div>
              </div>
              <div className="col col-12 col-lg-6 ">
                <div className="imgmain">
                  <img src={Mainbg} className="img-fluid homecol" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
