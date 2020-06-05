import React from 'react';
import './Folder.css';
import team from '../../img/team2.jpg';


const Folder = (props) => {
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6">
            <div className="folder">
              <img src={props.image ? props.image : team} alt={`${props.name} folder`} className="img-folder"/>
              <div className="details">
                <h3><button >{props.name}</button></h3>
                <p>{props.teamTypeName}</p>
                <div className="social">
                    <a href={props.fbURL} ><i className="fa fa-facebook"></i></a>
                    <a href={props.instaURL}><i className="fa fa-instagram"></i></a> 
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    );
}


export default Folder;