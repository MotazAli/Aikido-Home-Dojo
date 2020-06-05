import React from 'react';
import {Redirect} from 'react-router-dom';
import Auth from '../auth-component/Auth';
import * as actionCreators from '../../store/auth_store/actionCreators';
import {connect} from 'react-redux';
import './Login.css';
class Login extends React.Component{





    clickHandler = (data)=>{
        this.props.login(data);
    }


    render(){

        if(this.props.userId) return <Redirect to="/" />
        
        
        return (
            <section className=" singel-page ">
                <Auth onClick={this.clickHandler} buttonName="Login" />
            </section>
        );
    }
}


let mapStateToProps=state =>{
    return {
        userId:state.auth.userId
    }
}

let mapDispatchToProps = dispatch =>{
    return {
        login: (data)=>{dispatch(actionCreators.authLogin(data))}
    }
}

const setConnect = connect( mapStateToProps,mapDispatchToProps);

export default setConnect(Login);