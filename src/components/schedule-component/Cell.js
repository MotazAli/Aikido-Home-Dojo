import React from 'react';

const Cell=(props)=>{

    let body = null;
    if(props.IsHeader){
        body = <p>{props.HeaderName}</p>
    }
    else{
        body = <>
                <img src={ props.Image} className="img-fluid" alt=""/>
                    <div className="row">
                        <p> {props.Details} </p>
                    </div>
                </>
    }


        return (
            <> 
                <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo row">
                               {body}  
                            </div>
                </div>
            </>
        );
}


export default Cell;