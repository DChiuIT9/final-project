import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";


class LoginSignup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
            confirmPassword: '',
            redirectTo: null,
            loggedIn: false
        }
        this.handleChange = this.handleChange.bind(this)
		this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.baseUrl = "http://localhost:3000/api/user"

    }


	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSignupSubmit(event) {
		console.log("sign-up handleSubmit, username: ")
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		// axios.post(this.baseUrl + '/', {
        axios.post("/api/user", {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log("successful signup")
					this.setState({ //redirect to login page
						redirectTo: "/login-signup"
					})
				} else {
					console.log("username already taken")
				}
			}).catch(error => {
				console.log("signup error: ")
				console.log(error)

			})
    }
    
    handleLoginSubmit(event) {
        event.preventDefault()
        console.log("handleLoginSubmit")

        axios
            // .post(this.baseUrl + '/login', {
            .post("/api/user/login", {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log("login response: ")
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    window.sessionStorage.setItem('username', response.data.username);
                    this.setState({
                        loggedIn: true,
                        username: response.data.username,
                        redirectTo: "/upload"
                    });
                }
            }).catch(error => {
                console.log("login error: ")
                console.log(error);
                
            })
    }

    // state = {
    //     email: "",
    //     password: "",
    //     loginErrorMessage: ""
    // }

    // handleInput = event => {
    //     const { name, value } = event.target
    //     this.setState({
    //         [name]: value
    //     }, () => {
    //         console.log(this.state.email)
    //         console.log(this.state.password)

    //     })
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     const { email, password } = this.state
    //     axios.post('/login', { email, password })
    //         .then(result => {
    //             // this.setState({ redirectTo: "/" });
    //             console.log("/Login route then statement");
    //         })
    //         .catch(err => {
    //             this.setState({ loginErrorMessage: "*Please enter a valid email or password" })
    //         })
    // }

    render () {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo, state: {username: this.state.username}}} />
        } else {
            return (
            
                <form className="card center" style={{width: "18rem", padding: "10", margin: "auto"}}>
                <div className="card-body center">
                    <label>
                        <p>Sign up/Log in with your username</p>
                        Username:
                        <br />
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        Password:
                        <br />
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br /><br />
                    <button
                        className="btn btn-primary"
                        onClick={this.handleSignupSubmit}
                        type="submit"
                        style={{marginRight: "4em"}}
                        >Sign up</button>

                    <button
                        className="btn btn-primary"
                        onClick={this.handleLoginSubmit}
                        type="submit"
                    >Login</button>
            </div>
            </form>
            );
        }
    }
  
}


export default LoginSignup;
