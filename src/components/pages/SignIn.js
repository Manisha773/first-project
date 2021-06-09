import React, { useState} from 'react';
import './SignIn.css';


const SignIn = ()=> {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [isPasswordShown,setPasswordShown]=useState(false);
    
    const togglePasswordVisible = () => {
        setPasswordShown(isPasswordShown ? false : true);
      };

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const res=await fetch("http://localhost:8020/app/signin",{
            method:'POST',headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                email,password
            })
        });
        const data=await res.json();
        if(res.status===400||!data){
            
            window.alert("invalid credential")
        }
        else{
            localStorage.setItem('user',JSON.stringify(data))

            console.log(data)
            window.location='/';
        }
    }

        return(
            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-1.svg' alt='Log in'/>
                </div>
                <div className='form-content-right'>
                
                
                    <form action='/signin' method='POST' onSubmit={handleSubmit} className='form' noValidate>
                        <div className='form-inputs'>
                            <label className='form-label'>Email</label>
                            <input className='form-input' type='email' name='email' 
                            placeholder='Enter your email' required onChange={(e)=>setEmail(e.target.value)}/>
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Password</label>
                            <input className='form-input' type={isPasswordShown ? "text" : "password"} 
                            name='password' value={password}
                            placeholder='Enter Password' required onChange={(e)=>setPassword(e.target.value)}/>
                            <i className="fa fa-eye" onClick={togglePasswordVisible}></i>
                        </div>
            
                        <span className='form-input-forgot'>
                             <a href='/forgotpassword'>Forgot password?</a>
                        </span>
                        <br/>
                        <br/>
                        <button className='form-input-btn'  onSubmit={handleSubmit}>Sign In </button>
                        
                        <span className='form-input-login'>
                            Not Registered? SignUp <a href='/sign-up'>here</a>
                        </span>
                    </form>
                
                </div>
            </div>
        )
    }

export default SignIn;