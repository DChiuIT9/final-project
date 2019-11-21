import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
// import axios from "axios";
import API from "../utils/API";


class Upload extends Component {

  state = {
      name: "",
      item: "",
      comment: "",
      link: "",
      price: "",
      // redirectTo: null
  };


  handleChange = event => {
    const { name, value } = event.target;
		this.setState({
      [name]: value
    })
	};


	handleSubmit = event => {
		console.log(this.state.name);
		event.preventDefault();

    API.saveWishlist({
      name: this.state.name ? this.state.name : window.sessionStorage.getItem('username'),
      item: this.state.item,
      comment: this.state.comment,
      link: this.state.link,
      price: this.state.price
    })
    // .then(window.location.reload(false))
    .then()
    .catch(err => console.log(err));
    // window.location.reload(false)

  };




  render () {
    return (
      <div><h3 style={{textAlign: "center"}}>Create your own list</h3>
      <form onSubmit={this.handleSubmit} style={{padding: 30}}>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            name="name"
            value={window.sessionStorage.getItem('username')}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Item</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Comment</label>
          <input type="text" 
          className="form-control" 
          id="exampleFormControlInput1" 
          name="comment"
          value={this.state.comment}
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Link</label>
          <input type="text" 
          className="form-control" 
          id="exampleFormControlInput1" 
          name="link"
          value={this.state.link}
          onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Price</label>
          <input type="number" 
          className="form-control" 
          id="exampleFormControlInput1" 
          name="price"
          value={this.state.price}
          onChange={this.handleChange}
          />
        </div>
          <br />
          <button
            className="btn btn-primary"
            onClick={this.handleSubmit}
            type="submit"
          >Submit</button>

        </form>
        </div>
      )
  };
  
}


export default Upload;
