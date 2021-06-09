import React from 'react';
import './Home.css'

function HeroSection() {
    return (
        <div>
            <div className='hero-container'>
                {/* <img src='home.jpg' alt='..'/> */}
                <h1>Free Resume Templates</h1>
                <p>Choose from resume templates to create your own resume in minutes.</p>
                <div className='hero-btns'>
                <a href="/templates"
                 className="btnss btn-large btn-mobilessss" >click here to create your Resume</a>
                </div>
            </div>
            <div className='hero-container1'>
                <h1>Build Your Resume Resume</h1>
            </div>
            <div >
                <p>
                <ul>
                <h2>Impressive Resumes Made Easy! Get hired with the professional Resume Builder 
                    that will make you stand out from the crowd! Start Now!</h2>
                    <li>1.This is what you can expect from our easy resume builder:</li>
                    <li>2.Advanced resume building technulogy</li>
                    <li>3.HR-approved professional templates</li>
                    <li>4.An easy to use platform</li>
                    <li>5.Real-time reviews as you build your document</li>
                    <h2>Ready to get started? Why not <a href='/sign-up'>sign up</a> to begin your resume building adventure today!</h2>
                </ul>
                </p>
            </div>
            <div className='hero-btnss'>
                <a href="/templates"
                 className="btnsss btn-large btn-mobilessss" >Build Your Resume</a>
                </div>
            <div className='hero-containers' />
        </div>
    )
}

export default HeroSection;
