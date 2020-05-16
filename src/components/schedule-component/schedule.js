import React,{useEffect, useState} from 'react';
import WOW from 'wowjs';
import './schedule.css';
import {getScheduleDOM} from './utility';



const Schedule=()=>{

    const hosting = "http://localhost:2404";
    const [schedule,setSchedule] = useState(getScheduleDOM(null));


useEffect(()=>{
    new WOW.WOW().init();
    fetch(`${hosting}/Schedules`,
      {method:'get',
      headers:{'Content-Type':'application/json'}
    }).then((res)=>{
      return res.json();
    }).then((data)=>{
      if(data !==null && data !== undefined){
        setSchedule(getScheduleDOM(data)); 
      }
    });
},[]);



    return (
        <section id="supporters" className="section-with-bg wow fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Schedule</h2>
                </div>
        
                <div className="row no-gutters supporters-wrap clearfix">

                    {schedule.SATURDAY.header}
                    {schedule.SATURDAY.body}
                    {schedule.SUNDAY.header}
                    {schedule.SUNDAY.body}
                    {schedule.MONDAY.header}
                    {schedule.MONDAY.body}
                    {schedule.TUESDAY.header}
                    {schedule.TUESDAY.body}
                    {schedule.WEDNESDAY.header}
                    {schedule.WEDNESDAY.body}
                    {schedule.THURSDAY.header}
                    {schedule.THURSDAY.body}
                    {schedule.FRIDAY.header}
                    {schedule.FRIDAY.body}

{/* 
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                        <p>Saturday</p>
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={CUBS_ACADEMY} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Kids Start 7:00 PM to 8:30 PM </p>
                        </div>
                        
                    </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                        
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={CUBS_ACADEMY} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Adults Start 9:00 PM to 10:30 PM </p>
                        </div>
                    </div>
                    
                    </div>


                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                        <p>Monday</p>
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={YOUTH_CENTER} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Abden Youth Center Kids Start 7:00 PM to 8:00 PM </p>
                        </div>
                        
                    </div>
                    
                    </div>
                
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                        
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={YOUTH_CENTER} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Abden Youth Center Adults Start 8:00 PM to 9:00 PM </p>
                        </div>
                    </div>
                    
                    </div>
                    








                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                         <p>Wednesday</p>
                    </div>
                    </div>
                
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={CUBS_ACADEMY} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Kids Start 7:00 PM to 8:30 PM </p>
                        </div>
                        
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                        
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={CUBS_ACADEMY} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Adults Start 9:00 PM to 10:30 PM </p>
                        </div>
                    </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                        <p>Friday</p>
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={YOUTH_CENTER} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Abden Youth Center Kids Start 4:00 PM to 5:00 PM </p>
                        </div>
                        
                    </div>
                    
                    </div>
                
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo">
                        
                    </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-xs-6">
                    <div className="supporter-logo row">
                        <img src={YOUTH_CENTER} className="img-fluid" alt=""/>
                        <div className="row">
                        <p>Abden Youth Center Adults Start 5:00 PM to 6:00 PM </p>
                        </div>
                    </div>
                    
                    </div>
                     */}


        
                </div>
    
            </div>
            
        </section>
    );
};

export default Schedule;