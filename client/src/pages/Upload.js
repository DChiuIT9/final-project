import React from "react";
// import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";

function Upload() {
  return (

    <div>
      <h3 style={{textAlign: "center"}}>Create your own list</h3>
        <form style={{padding: 30}}>
        <div className="form-group">
            <label for="exampleFormControlInput1">Item</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect1">Comment</label>
            {/* <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select> */}
            <input type="text" class="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="form-group">
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

        </div>
        </form>
    </div>

  );
}

export default Upload;
