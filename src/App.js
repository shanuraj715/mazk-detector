import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Detect from './pages/detect/Detect'
import Howto from './pages/howto/Howtouse'
import Loading from './comps/loader/Loading'
import Err404 from './pages/err404/Err404'


import {BrowserRouter,Route,Switch} from "react-router-dom";





export default class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Home />} exact />
          <Route path="/about" exact render={() => <AboutUs />} />
          <Route path="/detect" exact render={() => <Detect />} />
          <Route path="/how-to-use" exact render={() => <Howto />} />
          <Route path="/" render={() => <Err404 />} />
          {/* <Route path="/" render={() => <API/>}  />   */}
        </Switch>
      </BrowserRouter>
    );
  }
}


