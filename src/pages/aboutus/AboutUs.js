import React, { Component } from 'react';
import Helmet from "react-helmet";
import Header from "../../comps/header/Header";
import Footer from '../../comps/footer/Footer'
import conf from '../../config.json'
import aboutimg from '../../assets/about.png'
import shanu from "../../assets/shanu.jpg";
import harshita from "../../assets/harshita.jpeg";
import arjun from "../../assets/arjun.jpg";
import Card from '../../comps/card/Card'
class AboutUs extends Component {
  
    render() {
        return (
          <React.Fragment>
            <Helmet>
              <title>About Us | {conf.APP_NAME}</title>
            </Helmet>
            <Header />
            <div className="container  pt-5 aboutcontainer">
              <div className="row aboutmin">
                <div className="col col-12 col-md-12 col-lg-6">
                  <img
                    src={aboutimg}
                    className="img-fluid my-auto"
                    alt="..."
                  ></img>
                </div>
                <div className="col col-12 col-md-12 col-lg-6 text-center">
                  <h1> About us</h1>
                  <p className="aboutcontent">
                    Mazk is an online mask detecting web app that can be used to
                    detect face mask. This web app can be attached with any
                    camera capturing device ie., CCTV, Webcam etc. In these hard
                    times, when world is fighting with Covid-19, Masks are made
                    compulsory but many people don’t wear it properly or don’t
                    wear it at all. Thus, Mazk can be used at shopping stores or
                    crowded places. If System detects someone without mask then
                    it will generate a beep sound. Being a web app it can run on
                    any device having screen width greater than 320 pixels and
                    having an internet connection.
                  </p>
                </div>
              </div>
            </div>

            <div className="container p-5">
              <h1 className="text-center">Our team</h1>
              <br />
              <br />
              <div className="row">
                <Card
                  image={shanu}
                  uname="Shanu Raj"
                  github="https://github.com/shanuraj715"
                  instagram="https://instagram.com/shanu_the_web_dev"
                />
                <Card
                  image={harshita}
                  uname="Harshita Mehta"
                  github="https://github.com/harshita128"
                  instagram="https://instagram.com/_harshitamehtaaaaa"
                />
                <Card
                  image={arjun}
                  uname="Arjun Sharma"
                  github="https://github.com/arjunas14"
                  instagram="https://instagram.com/arjun_sharma1498"
                />
                <Card image={arjun} uname="Amandeep Singh" />
              </div>
            </div>

            <Footer />
          </React.Fragment>
        );
    }
}

export default AboutUs;
