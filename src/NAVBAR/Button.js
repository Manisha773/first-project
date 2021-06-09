import  React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

function Button(){
    return(
        <Link to='Sign-up'>
            <button className='btns'>Sign up</button>
        </Link>
    )
}
export default Button;

