// import React from "react";
import React, { Component } from "react";
import Gift from "../models/wishlist"
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

class Upload extends Component {

  handleFormSubmit = event => {
    event.preventDefault();
    this.creatWishlist();
  };

  creatWishlist = () => {
    let testingObject = new Gift ({
      item: "Oil",
      comment: "no good",
      link: ["http://amazon.com"],
      price: 30,
      image: "http://amazon.com",
      amazonId: "12345"
    });
    testingObject.save (function (err) {if (err) console.log ('Error on save!')});
  };

  // testingObject.save (function (err) {if (err) console.log ('Error on save!')});


  render () {
    return (
    <div>
      <h3 style={{textAlign: "center"}}>Create your own list</h3>
        <form style={{padding: 30}}>
        <div className="form-group">
            <label for="exampleFormControlInput1">Item</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Comment</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-group">
            <label for="exampleFormControlInput1">Link</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>


        {/* <div className="form-group">
            <label for="exampleFormControlSelect2">Rating</label>
            <div>
            <input type="radio" value="1" checked />
            <label style={{marginLeft: ".5em", marginRight: "2em"}}>1</label>
            <input type="radio" value="2" />
            <label style={{marginLeft: ".5em", marginRight: "2em"}}>2 </label>
            <input type="radio" value="3" />
            <label style={{marginLeft: ".5em", marginRight: "2em"}}>3</label>
            <input type="radio" value="4" />
            <label style={{marginLeft: ".5em", marginRight: "2em"}}>4</label>
            <input type="radio" value="5" />
            <label style={{marginLeft: ".5em", marginRight: "2em"}}>5</label>
            </div>
        </div> */}

        <input onClick={this.handleFormSubmit} type="submit" value="Submit" />

        </form>
    </div>

    )};
}

export default Upload;
