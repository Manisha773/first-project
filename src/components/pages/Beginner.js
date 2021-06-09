import React from 'react';
import './temp.css'

export default function Beginner() {
  return (
    <>
      <h1 className='text-center text-danger text-capitalize my-5'>Templates</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img src="img/temp1.png" height='300' width='200' className="card-img-top" alt='templates' />
              <div className="card-body">
                <h5 className="card-title">Basic</h5>
                <p className="card-text">Try this template</p>
                <a href="/beginner/userForm" className="btn btn-primary">click here</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src="img/temp2.png" height='300' width='200' className="card-img-top" alt='templates' />
              <div className="card-body">
                <h5 className="card-title">college</h5>
                <p className="card-text">Try this template</p>
                <a href="https://zety.com/resume-templates" className="btn btn-primary">click here</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img src="img/temp3.jpg" height='300' width='200' className="card-img-top" alt='templates' />
              <div className="card-body">
                <h5 className="card-title">creative</h5>
                <p className="card-text">Try this template</p>
                <a href="https://www.resumonk.com/resume-templates" className="btn btn-primary">click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}