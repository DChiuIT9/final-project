import React, { Component } from "react";
// import axios from "axios";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import CryptoJS from "crypto-js";
import { List, ListItem } from "../components/List";
import NumberFormat from "react-number-format"

class Search extends Component {
  state = { 
    input: "",
    items: []
  };

  componentDidMount() {
    this.loadWishlist();
  }

  loadWishlist = () => {
    API.getWishlist()
      .then(res => this.setState({ items: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => {
      console.log("Input: " + this.state.input)
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchItems();
  // };

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
    // let products = [
    //   {price: 3, title: 'a'},
    //   {price: 5, title: 'b'},
    //   {price: 4, title: 'c'}]
    
    //sortingProducts = () = {products.sort((a, b) => a.price - b.price)}

  return (
    <div>
      {/* <form className="center">
        <label>
          <p>Wishlist Search</p>
          <input onChange={this.handleInputChange} type="text" name="input" />
        </label>
        <input onClick={this.handleFormSubmit} type="submit" value="Submit" />
      </form> */}
    
      <div>
      {this.state.items.length ? (
        <List>
          {this.state.items.map((wishlist) => (
            <ListItem key={wishlist._id}>
              Name: {wishlist.name}
              <br />
              Item: {wishlist.item}
              <br />
              Comment: {wishlist.comment}
              <br />
              Link: {wishlist.link}
              <br />
              Price: <NumberFormat value={wishlist.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
              <br />

            </ListItem>
          ))}
        </List>
      ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    
    </div>
  )};
}

export default Search;
