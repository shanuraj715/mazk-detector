import React, { Component } from 'react';
import Header from "../../comps/header/Header"
import Footer from "../../comps/footer/Footer";
import howto from "../../assets/howto.svg";
import step1 from "../../assets/step1.svg";
import step2 from "../../assets/step2.svg";
import step3 from "../../assets/step3.svg";
import Helmet from 'react-helmet'
class Howtouse extends Component {
    render() {
        return (
          <React.Fragment>
            <Helmet>
              <meta
                  name="description"
                  content="How To Use | Mazk | A mask detecting app."
              />
            </Helmet>
            <Header />
            <div className="container pt-3 aboutcontainer">
              <div className="row">
                <div className="col col-12 col-md-12 col-lg-6">
                  <img
                    src={howto}
                    className="img-fluid my-auto"
                    alt="..."
                  ></img>
                </div>
                <div
                  className="col col-12 col-md-12 col-lg-6"
                  style={{ display: "grid", placeItems: "center" }}
                >
                  <div>
                    <h1 className="mainheading shift" style={{textAlign:"center"}}>How To Use ?</h1>
                    <h5 className="secondheading shift">
                      MaZk is an online mask detector tool that can be attached
                      with various devices and hence abide people to wear mask.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="container ">
              <div className="row">
                <div className="col col-12 col-md-4 centerrr">
                  <img
                    src={step1}
                    className="img-fluid my-auto "
                    alt="..."
                  ></img>
                </div>
                <div className="col col-12 col-md-4 centerrr">
                  <img
                    src={step2}
                    className="img-fluid my-auto"
                    alt="..."
                  ></img>
                </div>
                <div className="col col-12 col-md-4 centerrr">
                  <img
                    src={step3}
                    className="img-fluid my-auto"
                    alt="..."
                  ></img>
                </div>
              </div>
            </div>
            <Footer />
          </React.Fragment>
        );
    }
}

export default Howtouse;
