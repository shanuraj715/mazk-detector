import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import {BrowserRouter,Route,Switch} from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Home/>} exact />
           <Route path="/" render={() => <AboutUs/>}  />         
             {/* <Route path="/" render={() => <API/>}  />   */}
        </Switch>
      </BrowserRouter>
    );
  }
}


