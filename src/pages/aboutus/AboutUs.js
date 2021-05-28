import React, { Component } from 'react';
import Helmet from "react-helmet";
import Header from "../../comps/header/Header";
import Footer from '../../comps/footer/Footer'
import conf from '../../config.json'
class AboutUs extends Component {
    render() {
        return (
          <React.Fragment>
            <Helmet>
                <title>About Us | {conf.APP_NAME}</title>
            </Helmet>
            <Header/>
            <h1>ABOUTUS</h1>
            <Footer />
          </React.Fragment>
        );
    }
}

export default AboutUs;
