import React from "react";
import 'w3-css/w3.css';
import img1 from './avtaar.jpg';

const Temp = (props) => {
    return (
        <body class="w3-light-grey" style={{ marginRight: "20px" }}>
            <div class="w3-content w3-margin-top-10" style={{ marginTop: "80px" }}>
                <div class="w3-row-padding">
                    <div class="w3-third">
                        <div class="w3-white w3-text-grey w3-card-4">
                            <div class="w3-display-container">
                                <img src={img1} alt="Avatar" />
                            </div>
                            <div class="w3-container">
                                <p className="w3-text-black">{props.values.firstName} {props.values.lastName}</p>
                                <p>{props.values.email} </p>
                                <p>(+91){props.values.mobile} </p>
                                <p>{props.values.linkedIn} </p>
                                <p>{props.values.github} </p>

                                <hr />
                                <div class="w3-container w3-card w3-white">
                                    <h2 class="w3-text-grey w3-padding-16"><i class=" w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                                    <div class="w3-container">
                                        <h5 class="w3-opacity"><b>{props.values.University_or_SchoolName} </b></h5>
                                        <h5 class="w3-opacity"><b>{props.values.qualification} </b></h5>
                                        <h6 class="w3-text-teal"><i class="fa-fw w3-margin-right"></i>{props.values.passingYear} </h6>
                                        <p>{props.values.MajorSubject}</p>
                                        <div class="w3-light-grey w3-round-xlarge w3-small">
                                            <div class="w3-container w3-center w3-round-xlarge w3-teal" >{props.values.Percentage} </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <p class="w3-large"><b>Skills</b></p>
                                <p>{props.values.Skill}</p>
                                <br />
                                <hr/>
                                <div class="w3-light-grey w3-round-xlarge">
                                    <div class="w3-round-xlarge w3-teal" ></div>
                                </div>
                            </div>
                        </div><br />
                    </div>
                    <div class="w3-twothird">
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 class="w3-text-grey w3-padding-16">Work Experience</h2>
                            <div class="w3-container">
                                <h5 class="w3-opacity"><b>{props.values.companyName} {props.values.Position}</b></h5>
                                <h6 class="w3-text-teal">({props.values.Start_Date}-{props.values.End_Date} )</h6>
                                <p>{props.values.Description}</p>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div class="w3-twothird">
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 class="w3-text-grey w3-padding-16"><i class="fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Project</h2>
                            <div class="w3-container">
                                <h5 class="w3-opacity"><b>{props.values.ProjectTitle} {props.values.ProjectLink} </b></h5>
                                <p>{props.values.ProDescription}</p>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div class="w3-twothird">
                        <div class="w3-container w3-card w3-white w3-margin-bottom">
                            <h2 class="w3-text-grey w3-padding-16">Extra Ciurricular</h2>
                            <div class="w3-container">
                                <h5 class="w3-opacity"><b>{props.values.language}</b></h5>
                                <h5 class="w3-opacity"><b>{props.values.hobbies}</b></h5>
                                <h5 class="w3-opacity"><b>{props.values.Certification}</b></h5>
                                <h5 class="w3-opacity"><b>{props.values.achievements}</b></h5>
                                <h5 class="w3-opacity"><b>{props.values.seminar}</b></h5>
                                <hr />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </body>
    );
}

export default Temp;