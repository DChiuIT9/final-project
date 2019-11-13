import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

function Login() {
  return (
    
    <form class="card" style={{width: "18rem", padding: "10", margin: "auto", }}>
        
        <div class="card-body">
            <label>
                <p>Sign in with your email</p>
                <input type="email" name="name" placeholder="name@placeholder.com" />
                <br />
                <br />
                <input type="password" name="name" />
            </label>
            <br />
            <button type="button" class="btn btn-primary">Submit</button>
      </div>
    </form>

  );
}

export default Login;
