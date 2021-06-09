import React, { Component } from "react";
import Temp from './Temp'
import './form.css';

export class Skills extends Component {
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
            <div style={{ display: 'flex', minHeight: '100vh' }}>
                <div className="card1">
                    <div className="card-body" style={{ background: "transparent" }}>
                        <h3 className="card-titles" style={{ color: "black" }}>
                            Skills
                        </h3>
                    </div>
                    <br />
                    <br />
                    <div className="row1">
                        <label>Skills</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Skills"
                            name="Skill"
                            onChange={handleChange("Skill")}
                            defaultValue={values.Skill}
                        />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className='row1'>
                        <div className="column1">
                            <button type="button" className="button2" style={{ background: 'linear-gradient(90deg,rgb(52,119,136)0%,rgb(36,58,61)100%)' }} onClick={this.back}>
                                Back</button>
                        </div>
                        <div className="column1">
                            <button
                                type="button"
                                className="button1" style={{ background: 'linear-gradient(90deg,rgb(52,119,136)0%,rgb(36,58,61)100%)' }}
                                onClick={this.continue}>
                                Next </button>
                        </div>
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

export default Skills;