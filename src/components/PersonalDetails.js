import React, { Component } from "react";
import Temp from './Temp';
import './form.css'

class PersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div style={{display:'flex',minHeight:'100vh'}}>
      <div style={{width:"70%"}}>
      <div className="card1">
        <div className="card-body" style={{backgroundColor:'transparent'}}>
          <h3 className="card-titles" style={{color:'black'}}>Personal Info</h3>
        </div>
        <br />
        <br/>
        <form onSubmit={this.continue}>
          <div className="row1">
            <div className="column1">
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder='Enter your first name'
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
                required
              />
            </div>
            <div className="column1">
              <label>Last Name*</label>
              <input
                type="text"
                name="lastName"
                placeholder='Enter your last name'
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
                required
              />
            </div>
          </div>
          <br />
          <br/>
          <br/>
          <div className="row2">
              <label>Email*  </label>
              <input
                type="email"
                name="email"
                placeholder='Enter your email id'
                onChange={handleChange("email")}
                defaultValue={values.email}
                required
              />
            </div>
            <br/>
            <br/>
            <div className="row3">
              <label>Mobile*</label>
              <input
                type="text"
                name="mobile"
                placeholder='Enter your mobile no.'
                onChange={handleChange("mobile")}
                defaultValue={values.mobile}
                required
              />
          </div>
          <br />
          <br/>
            <div className="row4">
              <label>Linked In</label>
              <input
                type="text"
                name="linkedin"
                defaultValue={values.linkedIn}
                placeholder='Enter your LinkedIn ID'
                onChange={handleChange('linkedIn')}
              />
            </div>
            <br/>
            <br/>
            <div className="row5">
              <label>Github</label>
              <input
                type="text"
                name="github"
                defaultValue={values.github}
                placeholder='Enter your Github ID'
                onChange={handleChange('github')}/>
            </div>
          <br />
          <br/>
          <div className="column1">
            <button type="button" className="button1" style={{background:'linear-gradient(90deg,rgb(52,119,136)0%,rgb(36,58,61)100%)'}} onClick={this.continue}>
              Next</button></div>
          <br />
        </form>
      </div>
      </div>
      <div style={{height:'500px',width:'50vw',zoom:'0.6'}}>
      <Temp values={values}/>
      </div>
      </div>
    );
  }
}

export default PersonalDetails;