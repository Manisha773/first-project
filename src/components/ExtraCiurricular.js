import React, { Component } from "react";
import Temp from './Temp'

export class ExtraCurricular extends Component {
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
            Extra Ciurricular
          </h3>
        </div>
          <br />
          <br/>
          <div className="row1">
            <label>Languages</label>
            <input
              type="text"
              placeholder="Languages"
              name="language"
              onChange={handleChange("language")}
              defaultValue={values.language}
            />
          </div>
          <br/>
          <br/>
          <div className="row1">
            <label>Cerification</label>
            <input
              type="text"
              placeholder="Cerification"
              name="Certification"
              onChange={handleChange("Certification")}
              defaultValue={values.Certification}
            />
          </div>
        <br />
        <br/>
          <div className="row1">
            <label>Achievements</label>
            <input
              type="text"
              placeholder="Achievements"
              name="achievements"
              onChange={handleChange("achievements")}
              defaultValue={values.achievements}
            />
          </div>
          <br/>
          <br/>
          <div className="row1">
            <label>Seminar</label>
            <input
              type="text"
              placeholder="Seminar"
              name="seminar"
              onChange={handleChange("seminar")}
              defaultValue={values.seminar}
            />
          </div>
          <br/>
          <br/>
          <div className="row1">
            <label>Hobbies</label>
            <input
              type="text"
              placeholder="Hobbies"
              name="hobbies"
              onChange={handleChange("hobbies")}
              defaultValue={values.hobbies}
            />
          </div>
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

export default ExtraCurricular;