
import React, { Component} from 'react';
import './SignIn.css';
import axios from 'axios';

class ForgotPassword extends Component {
    state={
        email:'',
        username:''
    }
    
    
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({[name]:value});
        
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8020/app/signinF',this.state)
        .then(response=>{
            console.log(response.data)
            if(response.data.status){ 
                window.location='/SigninF';
            }else{
                alert('user not found')
            }

        }        
    )

    }
    
    render(){

        return(
            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-2.svg' alt='Forgot Password'/>
                </div>
                <div className='form-content-right'>
                
                
                    <form action='/forgotpassword' method='POST' onSubmit={this.handleSubmit} className='form' noValidate>
                        <div className='form-inputs'>
                            <label className='form-label'>Email/Username</label>
                            <input className='form-input' type='email' name='email' 
                            placeholder='Enter your email/username' required onChange={this.handleChange}/>
                        </div>

                        <button className='form-input-btn'  onSubmit={this.handleSubmit} >Submit </button>
                        
                    </form>
                
                </div>
            </div>
        )
    }
}
export default ForgotPassword;