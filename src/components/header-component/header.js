import React , {useState,useEffect} from 'react';
import {Link,useLocation ,NavLink  } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/auth_store/actionCreators';
import './header.css';
import logo from '../../img/logo.png';

const Header = (props)=>{

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
          <li> <NavLink activeClassName="menu-active" to="/">Home</NavLink></li>
          <li> <NavLink activeClassName="menu-active" to="/team">Team</NavLink></li>
          <li><a href="#blog">Blog</a></li>
          <li><NavLink activeClassName="menu-active" to="/schedule">Schedule</NavLink></li>
          <li><a href="#online">Online</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><NavLink activeClassName="menu-active" to="/contact">Contact</NavLink></li>
          {props.userId ? <li className="buy-tickets"><button onClick={ () => props.logout(parseInt( props.userId ))} >Logout</button></li>:
          <li className="buy-tickets"><Link to="/login">Login</Link></li>}
          
        </ul>
      </nav>
    </div>
  </header>
        
    );
};


let mapStateToProps= state =>{
  return {
    userId : state.auth.userId
  }
}

let mapDispatchToProps = dispatch =>{
  return {
    logout:(userId)=>{ dispatch( actionCreators.authLogout(userId) ) }
  }
}

const setConnect = connect(mapStateToProps,mapDispatchToProps);

export default setConnect(Header);


