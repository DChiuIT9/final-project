import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import LoginSignup from "./pages/LoginSignup";
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
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
