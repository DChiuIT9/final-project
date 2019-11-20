// import React from "react";
import React, { Component } from "react";
import axios from "axios";
// import Gift from "../models/wishlist"
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

class Upload extends Component {
  // state = {
  //   name: "",
  //   item: "",
  //   comment: "",
  //   link: "",
  //   price: ""
  // }
  constructor(props) {
    super(props)
    this.state = { 
      name: "",
      item: "",
      comment: "",
      link: "",
      price: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert(this.state.name)
    event.preventDefault()
  }

  render () {
    return (

    <div>
      <h3 style={{textAlign: "center"}}>Create your own list</h3>
        <form onSubmit={this.handleSubmit} style={{padding: 30}}>
        <div className="form-group">
            <label>Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Item</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            value={this.state.item}
            onChange={this.handleChange}
            />
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Comment</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Link</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>

        <input onSubmit={this.handleSubmit} type="submit" value="Submit" />

        </form>
    </div>

    )}
}

export default Upload;
