import React, { Component } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import WorkExperience from "./WorkExperience";
import Project from "./Project";
import Skills from "./Skills";
import ExtraCurricular from "./ExtraCiurricular";
import Confirm from "./Confirm";
import Success from "./Success";
import axios from "axios";
import { saveAs } from "file-saver";
import Formats from "./Formats";

export class UserForm extends Component {
  state = {
    tempid: 0,
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    linkedIn: "",
    github: "",
    University_or_SchoolName: "",
    MajorSubject: "",
    qualification: "",
    passingYear: "",
    Percentage: "",
    companyName: "",
    Position: "",
    Start_Date: "",
    End_Date: "",
    Description: "",
    ProjectTitle: "",
    ProjectLink: "",
    ProDescription: "",
    Skill: "",
    language: "",
    Certification: "",
    achievements: "",
    seminar: "",
    hobbies: "",
    loggedEmail:""
  };

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //proceed to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  selectedFormat = (id) => {
    this.state.tempid = id;

  };

  //For downloading
  createAndDownload = () => {
      var user=JSON.parse(localStorage.getItem('user'))
      if(user===null){
          alert("Login first")
          window.location='/sign-in';
      }else{
        this.state.loggedEmail=user.email
        axios.post("http://localhost:8020/app/save-temp",this.state);
        axios.post("http://localhost:8020/create-pdf", this.state)
        .then(() =>axios.get("http://localhost:8020/fetch-pdf", { responseType: "blob" }))
        .then((res) => {  
          const pdfBlob = new Blob([res.data], { type: "application/pdf" });
          saveAs(pdfBlob, "newpdf.pdf");
          console.log(res)
          window.location='/';
        });
      }
    
  };

  //handle field changes
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      mobile,
      linkedIn,
      github,
      University_or_SchoolName,
      MajorSubject,
      qualification,
      passingYear,
      Percentage,
      companyName,
      Position,
      Start_Date,
      End_Date,
      Description,
      ProjectTitle,
      ProjectLink,
      ProDescription,
      Skill,
      language,
      Certification,
      achievements,
      seminar,
      hobbies,
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      mobile,
      linkedIn,
      github,
      University_or_SchoolName,
      MajorSubject,
      qualification,
      passingYear,
      Percentage,
      companyName,
      Position,
      Start_Date,
      End_Date,
      Description,
      ProjectTitle,
      ProjectLink,
      ProDescription,
      Skill,
      language,
      Certification,
      achievements,
      seminar,
      hobbies,
    };
    switch (step) {
      case 1:
        return (
          <Formats
            nextStep={this.nextStep}
            selectedFormat={this.selectedFormat}
            values={values}
          />
        );
      case 2:
        return (
          <div>
            <div>
              <PersonalDetails
                values={this.state}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
              />
            </div>
            <br />
          </div>
        );
      case 3:
        return (
          <div >
            <div >
              <EducationDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <br />
          </div>
        );
      case 4:
        return (
          <div >
            <div >
              <Skills
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <br />
          </div>
        );

      case 5:
        return (
          <div >
            <div >
              <WorkExperience
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <br />
          </div>
        );

      case 6:
        return (
          <div >
            <div >
              <Project
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <br />
          </div>
        );

      case 7:
        return (
          <div >
            <div >
              <ExtraCurricular
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </div>
            <br />
          </div>
        );
      case 8:
        return (
          <div>
              <Confirm
                download={this.createAndDownload}
                prevStep={this.prevStep}
                tempid={this.state.tempid}
                values={values}
              />
            <br/>
            </div>
        );
      case 9:
        return <Success />;
      default:
    }
  }
}

export default UserForm;