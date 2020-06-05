import React from 'react';
import './MainContainer.css';

const MainContainer = (props) =>{


    let button = null;
    if(props.showClick){
        button = <button  onClick={props.showClick} className="btn btn-success">New</button>;
    }
    // else if (props.dataTarget){
    //     button = <button data-toggle="modal" data-target={props.dataTarget}  className="btn btn-success">New</button>
    // }



    return (
        <section id={ props.id ? props.id:null} className="section-with-bg  main-body">
            <div className="container">
                <div className="section-header">
                    <div className="row ">
                        <div  className="col-sm-4"></div>
                        <div className="col-sm-4 align-self-center">
                        <   h2>{props.header}</h2>
                        </div>
                        <div className="col-sm-2 align-self-center">
                            {button}
                            
                        </div>
                    </div>
                    
                    
                    {props.description? <p>{props.description}</p> :null } 
                    
                </div>

                {/* <div className="row"> */}
                    {props.children}
                {/* </div> */}
            </div>
        </section>

    );
}


export default MainContainer;