import React, { Component } from "react";
import Temp from './Temp'

export class WorkExperience extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div style={{display:'flex',minHeight:'100vh'}}>
      <div className="card1">
        <div className="card-body" style={{background:"transparent" }}>
          <h3 className="card-titles" style={{ color: "black" }}>
            Work Experience
          </h3>
        </div>
        <br />
        <br />
        <div className="row1">
          <div className="column1">
          <label>Company Name</label>
            <input
              type="text"

              placeholder="Enter Company Name"
              name="companyName"
              onChange={handleChange("companyName")}
              defaultValue={values.companyName}
            />
          </div>
          <div className="column1">
          <label>Position</label>
            <input
              type="text"

              placeholder="Enter your Position"
              name="Position"
              onChange={handleChange("Position")}
              defaultValue={values.Position}
            />
          </div>
        </div>
        <br/>
        <br/>
        <br />
        <div className="row2">
          <label>Start Date</label>
            <input
              type="text"

              placeholder="Enter Start Date"
              name="Start_Date"
              onChange={handleChange("Start_Date")}
              defaultValue={values.Start_Date}
            />
          </div>
          <br />
          <br />
          <div className="row3">
          <label>End Date</label>
            <input
              type="text"

              placeholder="Enter End Date"
              name="End_Date"
              onChange={handleChange("End_Date")}
              defaultValue={values.End_Date}
            />
        </div>
        <br />
        <br />
        <div className="row4">
        <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="Description"
            onChange={handleChange("Description")}
            defaultValue={values.Description}
          />
          </div>
          <br />
          <br />
        <br />
        <div className="row1">
            <div className="column1">
            <button type="button" className="button2" style={{background:'linear-gradient(90deg,rgb(52,119,136)0%,rgb(36,58,61)100%)'}} onClick={this.back}>
            Back</button></div>
            <div className="column1">
            <button type="button" className="button1" style={{background:'linear-gradient(90deg,rgb(52,119,136)0%,rgb(36,58,61)100%)'}} onClick={this.continue}>
              Next</button></div>
        </div>
        <br />
        </div>
        <div style={{height:'500px',width:'75vw',zoom:'0.6'}}>
            <Temp values={values}/>
      </div>
      </div>
    );
  }
}

export default WorkExperience;