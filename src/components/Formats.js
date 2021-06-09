import React, { Component } from "react";
import img1 from "./0001.jpg";
import img2 from "./0002.jpg";
import img3 from "./0003.jpg";
import img4 from "./0004.jpg";
import img5 from "./0006.png";
import "tachyons";

export class Formats extends Component {
  continues = (e) => {
    e.preventDefault();
    this.props.selectedFormat(e.target.id);
    this.props.nextStep();
  };
  render() {
    return (
      <>
        <h1 className="tc"> RESUME FORMATS </h1>
          <img
            className="grow ma4 tc"
            style ={{height: '450px',width : '500px'}}
            id="1"
            onClick={this.continues}
            src={img5}
            alt="number1"
          />
        <img
          className="grow ma4 tc"
          style ={{height: '450px',width : '450px'}}
          id="2"
          onClick={this.continues}
          src={img2}
          alt="number2"
        />
        <img
          className="grow ma4 tc"
          style ={{height: '420px',width : '450px'}}
          id="3"
          onClick={this.continues}
          src={img3}
          alt="number1"
        />
        <img
          className="grow ma4 tc"
          style ={{height: '420px',width : '450px'}}
          id="4"
          onClick={this.continues}
          src={img4}
          alt="number2"
        />
        <img
          className="grow ma4 tc"
          style ={{height: '420px',width : '350px'}}
          id="5"
          onClick={this.continues}
          src={img1}
          alt="number2"
        />
      </>
    );
  }
}

export default Formats;