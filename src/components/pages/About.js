import React from 'react'

function About() {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p style={{ textAlign: 'center', fontSize: '20px'}}>LiveCareer provides you with the resources, knowledge and expert 
        advice you need to land the job you want.</p>
        <p style={{ textAlign: 'center', fontSize: '20px' }}>Over the past 15 years, we’ve helped more than 10 million job seekers 
        build stronger resumes, discover their career paths, interview with confidence, and boost their chances of finding the right job faster.</p>
      </div>
      <br />

      <h2 style={{ textAlign: 'center', fontSize: '30px', color: 'blue' }}>Our Resume</h2>
      <div className="row">
        <div className="column">
          <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: '8px', width: '50%', marginLeft: '25%' }}>
            <img src="img/a.png" alt="Jane" width="300px" height="500px" />
            <div className="container">
              <h2 style={{color:'blue',fontSize:'40px'}}>2,000,000+</h2>
              <p >Cover Letters created</p>
              <p>Cover letters are just as important as resumes, and our Cover Letter Builder does the work for you 
              to make it easier than ever to make a great first impression.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: '8px', width: '50%', marginLeft: '25%' }}>
            <img src="img/b.png" alt="Jane" width="300px" height="500px" />
            <div className="container">
              <h2 style={{color:'orange',fontSize:'40px'}}>10,000,000+</h2>
              <p >Resumes created</p>
              <p>We’ve made it easy for customers to build professional resumes for any industry and job title. 
              Check out our library of Resume Examples written by our team of certified resume writers.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", margin: '8px', width: '50%', marginLeft: '25%' }}>
            <img src="img/c.png" alt="Jane" width="300px" height="500px" />
            <div className="container">
              <h2 style={{color:'green',fontSize:'40px'}}>2,400+</h2>
              <p>Free articles</p>
              <p>Our contributors have written thousands of articles on job search and career 
              topics to help guide you through every stage of your career. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

