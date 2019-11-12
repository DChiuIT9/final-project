import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

function Search() {
  return (
    <form>
      <label>
        <p>Wishlist Search</p>
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>

  );
}

export default Search;
