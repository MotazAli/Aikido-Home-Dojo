import React , {useState,useEffect} from 'react';
import {Link,useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../img/logo.png';

export default function Header(){

  const location = useLocation();
    
    const [ scrolled, setScrolled ] = useState(false)
    useEffect( () => {
        const handleScroll = () => {
            
          if(location.pathname === "/" ){
            if (window.pageYOffset > 100) {
              setScrolled(true)
            } else {
              setScrolled(false)
            }
          }
          else
          {
            if (window.pageYOffset > 1) {
              setScrolled(true)
            } else {
              setScrolled(false)
            }
          }
            
          
        }
        window.addEventListener('scroll', handleScroll)



        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      });


      


    return (
        <header id="header" className={` ${scrolled ? "header-scrolled":""} `} >
    <div className="container">

      <div id="logo" className="pull-left">
        
        <a href="#intro" className="scrollto"><img src={logo} alt="" title=""/></a>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          {/* <li className="menu-active"> <Link to="/">Home</Link></li> */}
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/team">Team</Link></li>
          <li><a href="#blog">Blog</a></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><a href="#online">Online</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="buy-tickets"><a href="#buy-tickets">Register</a></li>
        </ul>
      </nav>
    </div>
  </header>
        
    );
}


