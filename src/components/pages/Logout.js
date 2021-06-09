import React from 'react'


function Logout() {
   
    localStorage.removeItem('user');
    window.location='/';
    
    return (
        <div></div>
    )
}

export default Logout
