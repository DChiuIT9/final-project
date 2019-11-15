import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

class Search extends Component {
  state = {
    input: "",
    Items: []
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => {
      console.log("Input: " + this.state.input)
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchItems();
  };

  searchItems = () => {
    API.searchItems(this.state.input)
      .then(res =>
        this.setState({
          Items: res.data
        })
      )
      .catch(() =>
        this.setState({
          Items: [],
        })
      );
  };

  render () {

  return (
    <form className="center">
      <label>
        <p>Wishlist Search</p>
        <input onChange={this.handleInputChange} type="text" name="input" />
      </label>
      <input onClick={this.handleFormSubmit}type="submit" value="Submit" />
    </form>
  )};
}

export default Search;
