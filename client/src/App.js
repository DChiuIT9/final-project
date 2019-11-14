import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reg" component={Reg} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
