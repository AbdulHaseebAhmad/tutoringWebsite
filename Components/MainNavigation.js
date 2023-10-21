import React ,{useEffect, useState}from 'react'
import classes from "../CSS/mainNavigation.module.css";
import logo from "../Assets/Logo.png";
import { Link, NavLink } from 'react-router-dom';
import Button from './Button';



export default function MainNavigation() {

        const [ screenWidth,setWinowWidth] = useState('');
        const [mc,smc] = useState(false);
        
        const getWindowSize = () => {
            const windowSize = window.innerHeight;
            setWinowWidth(windowSize);
        smc(!mc);}

        useEffect(()=>{
            getWindowSize();
            console.log(screenWidth);
    },[ ])


  return <nav className={classes.container}>

       
        <div className={classes.logoContainer}>
            <img src={logo} className={classes.logoImg} alt="logo=img"/>
        </div>

        <div className={classes.navLinkContainer}>
            <ul>
                <li><NavLink to='/' className={({isActive})=> isActive? classes.active:undefined}>Home</NavLink></li>
                <li><NavLink to='/'>Tutor</NavLink></li>
                <li><NavLink to='/'>Nannies</NavLink></li>
                <li><NavLink to='/'>Governess</NavLink></li>
                <li><NavLink to='/'>About Us</NavLink></li>
                <li><NavLink to='/'>Blog</NavLink></li>
                <li><NavLink to='/'>Become a Candidate</NavLink></li>
            </ul>
        </div>

        <Button buttontext="Contact Us" style={classes.Button}/>
        
      
    </nav>
  
}
