import React, { useState } from 'react';
import Button2 from './Button2';
import Button from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Navbar (){
    var user=localStorage.getItem('user')
    var status=false;
    if(user!=null){
        status=true;
    }
    const RenderMenu=()=>{
        if(status){
            return(
                <>
                <li className='nav-item'>
                    <Link to ='/' className='nav-links' onClick={closeMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/about' className='nav-links' onClick={closeMenu}>About</Link>
                </li>
                
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to ='/resume' className='nav-links' onClick={closeMenu}>Resume</Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to ='/templates' className='nav-links' onClick={closeMenu}>Templates</Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/profile' className='nav-links' onClick={closeMenu}><AccountCircleIcon fontSize='large'/></Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/logout' className='nav-links' onClick={closeMenu}>Logout</Link>
                </li>
                
                </>

            )
        }else{
            return(
                <>
                 <li className='nav-item'>
                    <Link to ='/' className='nav-links' onClick={closeMenu}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/about' className='nav-links' onClick={closeMenu}>About</Link>
                </li>
                
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to ='/resume' className='nav-links' onClick={closeMenu}>Resume</Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to ='/templates' className='nav-links' onClick={closeMenu}>Templates</Link>
                </li>
                <Button2/>
                <Button />
                
                </>

            )
        }

    }

    const [click,setClick]=useState(false);
    const [dropdown,setDropdown]=useState(false);


    const handleClick=()=>setClick(!click);
    const closeMenu=()=>setClick(false);

    const onMouseEnter=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };
    const onMouseLeave=()=>{
        if(window.innerWidth<960){
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };
    return(
        <>
            <div className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Helios Web Service
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <ul className={click? 'nav-menu active':'nav-menu'}>
                
                <li className='nav-item'>
                    <Link to ='/sign-in' className='nav-links-mobile' onClick={closeMenu}>Sign in</Link>
                </li>
                
                <li className='nav-item'>
                    <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMenu}>Sign Up</Link>
                </li>
                </ul>
                <RenderMenu/>
                
            </div>
        </>
    )
}
export default Navbar;