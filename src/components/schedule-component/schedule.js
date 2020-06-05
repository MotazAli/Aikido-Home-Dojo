import React from 'react';
import {connect} from 'react-redux';

import * as ActionCreators from '../../store/actionCreators';
import WOW from 'wowjs';
import './schedule.css';
import Cell from './Cell';



class Schedule extends React.Component{

    hosting = "http://localhost:2404";
    schedulePath = "/assets/schedule/";
    state ={
        schedule:null
    }


    componentDidMount(){
        new WOW.WOW().init();
        this.props.getSchedule();
    }



    render(){


        let renderSchedule = [];
        if(this.props.schedule ){
            Object.entries(this.props.schedule).forEach(([key,value])=>{ 
                if(value.data !== null && value.data.length > 0)
                {
                    renderSchedule.push((<Cell key={value.id} IsHeader={true} HeaderName={key} />));

                     let temp = value.data.map((day)=>{
                        return <Cell key={day.ID} IsHeader={false} 
                            Image={`${this.hosting}${this.schedulePath}${day.Image}`}
                            Details={` ${day.Place} ${day.TeamType.Name} start ${day.StartTime} to ${day.EndTime}  `} />;
                    });

                    renderSchedule.push(temp);
                }

            });

        }




    return (
        //wow fadeInUp
        <section id="supporters" className="section-with-bg  main-body">
            <div className="container">
                <div className="section-header">
                    <h2>Schedule</h2>
                </div>
        
                <div className="row no-gutters supporters-wrap clearfix">
                    {renderSchedule}
                </div>
    
            </div>
            
        </section>
    );
    }
};

let mapStateToProps = state =>{
    return {
        schedule : state.main.schedule
    }
}

let mapDispatchToProps = dispatch =>{
    return {
        getSchedule : ()=> dispatch(ActionCreators.getSchedule())
    }
}


const setConnect = connect(mapStateToProps,mapDispatchToProps);
export default setConnect( Schedule);