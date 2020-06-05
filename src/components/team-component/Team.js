import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
//import Members from './Members';
import Folders from '../folder-component/Folders';
import FolderCreator from '../folder-component/FolderCreator';
//import test from '../../img/images.jpg';
import './Team.css';
import MainContainer from '../main-container-component/MainContainer.js';
//import './Folder.css';
import WOW from 'wowjs';
class Team  extends React.Component{

    state = { showDialog : false}
    
componentDidMount(){
    new WOW.WOW().init();
    this.props.getTeamTypes();
    this.props.getTeams();
}

clickHandler = ()=>{
    this.setState({showDialog: !this.state.showDialog});
}


    render(){
        return (




            <React.Fragment>
             
                { this.state.showDialog ? <FolderCreator selectOption={this.props.teamTypes}   hideClick={this.clickHandler} title="New Team" /> : null}
          <MainContainer header="Our Teams"  showClick={this.clickHandler} >
              
              <div className="row">
                {this.props.teams ? <Folders items={this.props.teams} />: null}
              </div>
          </MainContainer>
          </React.Fragment>

    //       <section id="buy-tickets" className="wow ">
    //   <div className="container">
    //     <div className="section-header">
    //       <h2>Event Speakers</h2>
    //       <p>Here are some of our speakers</p>
    //     </div>

    //     <div className="row">
          
    //     </div>
    //   </div>

    // </section>









          // wow fadeInUp
            // <section id="buy-tickets" className="section-with-bg ">
            //   <div className="container">

            //     <div className="section-header">
            //       <h2>Our Team</h2>
            //     </div>

            //     <div className="row">
            //       <Members teams={this.state.teams} />
            //     </div>
            //   </div>
            // </section>

    
        );
    }
    
}

let mapStateToProps = (state)=>{
    return {
        teams : state.main.teams,
        teamTypes : state.main.teamTypes
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        getTeams:()=>{dispatch(actionCreators.getTeams())},
        getTeamTypes: ()=>{ dispatch(actionCreators.getTeamTypes())}
    }
}
const setConnect = connect(mapStateToProps,mapDispatchToProps);

export default setConnect(Team);