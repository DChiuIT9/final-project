import React, { Component } from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";


class Reg extends Component {

  render () {
    return (
    
      <form className="card center" style={{width: "18rem", padding: "10", margin: "auto"}}>
          
          <div className="card-body center">
              <label>
                  <p>Register</p>
                  Email:
                  <br />
                  <input type="email" name="name" placeholder="name@placeholder.com" />
                  <br />
                  <br />
                  Password: <input type="password" name="name" />
              </label>
              <br /><br />
              <button type="button" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }

}

export default Reg;
