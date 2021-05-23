import React, { Component } from 'react';
import Helmet from "react-helmet";
import Header from "../../comps/header/Header";
class AboutUs extends Component {
    render() {
        return (
          <React.Fragment>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Header/>
            <h1>ABOUTUS</h1>
          </React.Fragment>
        );
    }
}

export default AboutUs;
