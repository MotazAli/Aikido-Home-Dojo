import React, {useRef} from 'react';
import './Auth.css';
import logo from '../../img/logo_noName.png';


const Auth =(props)=>{

    let email = useRef('');
    let password = useRef('');
    
    // state = {
    //     isLogin: true
    // }


    // toggleLoginOrRegister = ()=>{
    //     this.setState({isLogin : !this.state.isLogin});
    // }

    //render(){

        // let remeber_me = null;
        // if(this.state.isLogin)
        // {
        //     remeber_me = (
        //         <>
        //             <div className="form-group">
        //                         <div className="custom-control custom-checkbox">
        //                             <input type="checkbox" className="custom-control-input" id="customControlInline"/>
        //                             <label className="custom-control-label" for="customControlInline">Remember me</label>
        //                         </div>
        //                     </div>
        //         </>
        //     );
        // }



        return (
            // <section className=" singel-page ">
                <div className="container auth-container ">
            <div className="d-flex justify-content-center ">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img src={logo} className="brand_logo" alt="Logo"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input ref={email} type="text" name="" className="form-control input_user"  placeholder="Email"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input  ref={password} type="password" name="" className="form-control input_pass"  placeholder="Password"/>
                            </div>
                            {/* {remeber_me} */}



                                <div className="d-flex justify-content-center mt-3 login_container">
                         <button onClick={() => props.onClick({Email:email.current.value , Password : password.current.value})}  type="button" name="button" className="btn login_btn"> { props.buttonName  }  </button>
                       </div>
                        </form>
                    </div>
            
                    {/* <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            <span> { this.state.isLogin ? "Don't have an account?": "have an account?" } </span> 
                            <button onClick={this.toggleLoginOrRegister} type="button" name="button"  className=" btn  btn-link "> { this.state.isLogin ? "Register here": "Login here " } </button>
                        </div>
                        <div class="d-flex justify-content-center links">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    
            // </section>
            
        );
    //}
}

export default Auth;