import React from 'react';
import Member from './Member';
import MainContainer from '../../main-container-component/MainContainer';

class Memebers extends React.Component{ 
    
    state = {
        teams : [1,2,3,4,5,6]
    };


    render(){
        return(
            <MainContainer id="members" >
                <div className="row" >
                { this.state.teams.map( (team,index)=> {
                   return <Member  key={index}  />
               }) }
                </div>
                
            </MainContainer>
            
    
        );
    }
    
 } 
        

export default Memebers;