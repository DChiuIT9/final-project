// import React from "react";
import React, { Component } from "react";
import axios from "axios";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";


class Login extends Component {
    state = {
        email: "",
        password: "",
        loginErrorMessage: ""
    }

    handleInput = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state.email)
            console.log(this.state.password)

        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state
        axios.post('/login', { email, password })
            .then(result => {
                // this.setState({ redirectTo: "/" });
                console.log("/Login route then statement");
            })
            .catch(err => {
                this.setState({ loginErrorMessage: "*Please enter a valid email or password" })
            })
    }

    render () {
      return (
      
        <form className="card center" style={{width: "18rem", padding: "10", margin: "auto"}}>
        
        <div className="card-body center">
            <label>
                <p>Sign in with your email</p>
                Email:
                <br />
                <input onChange={this.handleInput} type="email" name="email" placeholder="name@placeholder.com" />
                <br />
                <br />
                Password:
                <br />
                <input onChange={this.handleInput} type="password" name="password" />
            </label>
            <br /><br />
            <button type="button" class="btn btn-primary">Login</button>
      </div>
    </form>
      );
    }
  
}


export default Login;
