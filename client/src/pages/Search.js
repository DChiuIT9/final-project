import React, { Component } from "react";
// import axios from "axios";
import API from "../utils/API";
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
    if (this.props.location.state)
    console.log(this.props.location.state.username);
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

  return (
    <div>
      <div>
      {this.state.items.length ? (
        <List>
          {this.state.items.map((wishlist) => (
            <ListItem key={wishlist._id}>
              <strong>Name: </strong>{wishlist.name}
              <br />
              <strong>Item: </strong>{wishlist.item}
              <br />
              <strong>Comment: </strong>{wishlist.comment}
              <br />
              <strong>Link: </strong>
              {/* <img src="../../public/assets/img/icons8-external-link-24.png" alt="" /> */}
              <a target="_blank" href={wishlist.link}>(Open in new tab)</a>
              <br />
              <strong>Price: </strong><NumberFormat value={wishlist.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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
