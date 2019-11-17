import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import CryptoJS from "crypto-js";
import Gift from '../models/wishlist';
import items from "../mock_data/parser";

class Search extends Component {
  state = { 
    input: "",
    items: [Gift]
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

  // searchItems = () => {
  //   API.searchItems(this.state.input)
  //     .then(res =>
  //       this.setState({
  //         Items: res.data
  //       })
  //     )
  //     .catch(() =>
  //       this.setState({
  //         Items: [],
  //       })
  //     );
  // };


  render () {
    let products = [
      {price: 3, title: 'a'},
      {price: 5, title: 'b'},
      {price: 4, title: 'c'}]
    
    //sortingProducts = () = {products.sort((a, b) => a.price - b.price)}


  return (
    <div>
    <form className="center">
      <label>
        <p>Wishlist Search</p>
        <input onChange={this.handleInputChange} type="text" name="input" />
      </label>
      <input onClick={this.handleFormSubmit} type="submit" value="Submit" />
    </form>
    
    <div>
        
    {!this.state.items.length ? (
        <ul>
            {this.state.items.map(wishlist => {
              return (
                // wishlist
                <div>
            <h3>{wishlist.items}</h3>
                </div>
              );
            })}
        </ul>
        ) : (
        <h3>No Results to Display</h3>
        )}
        {/* {this.state.items.length} */}

        {items.length ? (
            items.map((pro, i) => (
              <ul>
                <li>
              Price: {pro.price}
              <br />
              title: {pro.title}
                </li>
              </ul>

                ))
            ) : (
              <h3>No Results to Display</h3>
            )}
    </div>
    
    </div>
  )};
}

export default Search;
