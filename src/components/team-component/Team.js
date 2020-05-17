import React from 'react';
import Members from './Members';
import './Team.css';
import WOW from 'wowjs';
class Team  extends React.Component{

    state = {
        teams : [1,2,3,4,5]
    }



componentDidMount(){
    new WOW.WOW().init();
}


    render(){
        return (
          // wow fadeInUp
            <section id="buy-tickets" className="section-with-bg ">
              <div className="container">

                <div className="section-header">
                  <h2>Our Team</h2>
                </div>

                <div className="row">
                  <Members teams={this.state.teams} />
                </div>
              </div>
            </section>

    
        );
    }
    
}



export default Team;