import React from 'react'
import './profile.css';
import {Link} from 'react-router-dom';


function Profile() {
    const loggedinUser=localStorage.getItem('user');  
    return (
        <>
            <div className="card_profile">
                <img src="img/avtar.jpg" className="img-top" alt="John" />
                    <br/>
                    <hr/>
                    <h1>{JSON.parse(loggedinUser).username}</h1>
                    <p className="titles">{JSON.parse(loggedinUser).email}</p>
                    <Link to ='/profile/myprofile'>
                    <button >my resume</button>
                    </Link>
                    <br/>
                    <button className="button"><a href='/SigninF'>Reset Password</a></button>
            </div>
        </>
    )
}

export default Profile
