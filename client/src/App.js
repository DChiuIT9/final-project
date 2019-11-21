// import React from 'react';
import React, { Component } from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import LoginSignup from "./pages/LoginSignup";
// import Reg from "./pages/Reg";
// import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

class App extends Component {
  render () {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/login-signup" component={LoginSignup} />
        {/* <Route exact path="/test" component={Test} /> */}
        {/* <Route exact path="/reg" component={Reg} /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
