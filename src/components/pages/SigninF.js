import React, { Component} from 'react';
import './SignIn.css';
import axios from 'axios';

class SigninF extends Component {
    state={
        password:'',
        conf_password:'',
        isPasswordShown:false
    }
    togglePasswordVisible=()=>{
        const {isPasswordShown}=this.state;
        this.setState({isPasswordShown:!isPasswordShown})
    }

    
    handleChange=(e)=>{
        const {name,value}=e.target;
        this.setState({[name]:value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.password===this.state.conf_password){
            axios.put('http://localhost:8020/app/reset',this.state)
            .then(response=>{
                console.log(response.data)
                if(response.data.status){ 
                    //this.setState({[this.state.data]:response.data.email});
                    window.location='/profile';
                }else{
                    alert('Error occurred in resetting your password')
                }
    
            }        
            )       
        }else{
            alert("Password doesn't match")
        }
    }
    
    render(){
         const {isPasswordShown}=this.state;

        return(
            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-1.svg' alt='Log in'/>
                </div>
                <div className='form-content-right'>
                
                
                    <form action='/SigninF' method='POST' onSubmit={this.handleSubmit} className='form' noValidate>

                        <div className='form-inputs'>
                            <label className='form-label'>set Password</label>
                            <input className='form-input' 
                             type={(isPasswordShown)?"text":"password"} 
                            name='password' 
                            placeholder='Enter Password' required onChange={this.handleChange}/>
                            <i className="fa fa-eye" onClick={this.togglePasswordVisible}></i>
                        </div>
                        <div className='form-inputs'>
                            <label className='form-label'>confirm Password</label>
                             <input className='form-input' 
                              type={(isPasswordShown)?"text":"password"}
                            name='conf_password' 
                            placeholder='Enter Password' required onChange={this.handleChange}/>
                            <i className="fa fa-eye" onClick={this.togglePasswordVisible}></i>
                        </div>
                        <button className='form-input-btn'  onSubmit={this.handleSubmit}>Submit </button>
                    </form>
                
                </div>
            </div>
        )
        
    }
}
export default SigninF;