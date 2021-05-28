import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutus/AboutUs";
import Detect from './pages/detect/Detect'




import {BrowserRouter,Route,Switch} from "react-router-dom";





export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" render={() => <Home/>} exact />
           <Route path="/about" exact render={() => <AboutUs/>}  />        
           <Route path="/detect" exat render={() => <Detect/>}  />         
             {/* <Route path="/" render={() => <API/>}  />   */}
        </Switch>
      </BrowserRouter>
    );
  }
}


