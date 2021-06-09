import React, { Component } from "react";
import Temp from './Temp'

export class Confirm extends Component {
  continue = (e) => {
    this.props.download();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    return (
      <>
      <Temp values={values}/>
      <br/>
      <br/>
      <div className="row1 ">
        <div className="column1">
          <button type="button" className="button2" onClick={this.back} >Back </button>
          </div>
          <div className="column1">
          <button type="button" className="button1" onClick={this.continue} >Download Resume</button>
          </div>
        </div>
        <br/>
        <br/>
        </>
    );
  }
}

export default Confirm;