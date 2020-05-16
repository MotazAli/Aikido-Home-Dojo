import React from 'react';

const ScheduleDays={
    SATURDAY: { header: <></> , body: <></>  } ,
    SUNDAY:  { header: <></> , body: <></>  } ,
    MONDAY:  { header: <></> , body: <></>  } ,
    TUESDAY:  { header: <></> , body: <></>  } ,
    WEDNESDAY:  { header: <></> , body: <></>  } ,
    THURSDAY:  { header: <></> , body: <></>  } ,
    FRIDAY:  { header: <></> , body: <></>  } 
  };

function getScheduleDOM(schedule){
    var ScheduleDaysClone = {...ScheduleDays};
    if(schedule === null || schedule === undefined) return ScheduleDaysClone


    const hosting = "http://localhost:2404";
    const schedulePath = "/assets/schedule/";

    const buildHeader = (name)=>{
        const data = getScheduleData(name);
        if(data !== null && data !== undefined && data.length >0 ){
            return <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="supporter-logo">
                <p>{name}</p>
            </div>
            </div>
        }

        return <></>;
    };

    const buildBody = (name)=>{
        const data = getScheduleData(name);
        if(data !== null && data !== undefined && data.length > 0){
            
            var result = data.map((day , index)=>{

                if(index === data.length -1){
                    return <> 
                <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo row">
                                <img src={ `${hosting}${schedulePath}/${day.Image}`} className="img-fluid" alt=""/>
                                <div className="row">
                                    <p> {` ${day.Place} ${day.TeamType.Name} start ${day.StartTime} to ${day.EndTime}  `}</p>
                                </div>
                                
                            </div>
                            </div>
                            </>
                }
                else{
                    return <> 
                <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo row">
                                <img src={ `${hosting}${schedulePath}/${day.Image}`} className="img-fluid" alt=""/>
                                <div className="row">
                                    <p> {` ${day.Place} ${day.TeamType.Name} start ${day.StartTime} to ${day.EndTime}  `}</p>
                                </div>
                                
                            </div>
                            </div>
                        
                            <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                
                            </div>
                            </div>
                            </>
                }
                
            });
            return result;
        }

        return <></>;
    
    }




const getScheduleData=(dayName)=>{
    
    switch (dayName){
        case schedule.SATURDAY.name :{ return schedule.SATURDAY.data;}
        case schedule.SUNDAY.name :{ return schedule.SUNDAY.data;}
        case schedule.MONDAY.name :{ return schedule.MONDAY.data;}
        case schedule.TUESDAY.name :{ return schedule.TUESDAY.data;}
        case schedule.WEDNESDAY.name :{ return schedule.WEDNESDAY.data;}
        case schedule.THURSDAY.name :{ return schedule.THURSDAY.data;}
        case schedule.FRIDAY.name :{ return schedule.FRIDAY.data;}
        default :{ return null}
    }
}

    if(schedule !== null && schedule !== undefined){
        ScheduleDaysClone.SATURDAY.header = buildHeader("Saturday");
        ScheduleDaysClone.SATURDAY.body = buildBody("Saturday");
        ScheduleDaysClone.SUNDAY.header = buildHeader("Sunday");
        ScheduleDaysClone.SUNDAY.body = buildBody("Sunday");
        ScheduleDaysClone.MONDAY.header = buildHeader("Monday");
        ScheduleDaysClone.MONDAY.body = buildBody("Monday");
        ScheduleDaysClone.TUESDAY.header = buildHeader("Tuesday");
        ScheduleDaysClone.TUESDAY.body = buildBody("Tuesday");
        ScheduleDaysClone.WEDNESDAY.header = buildHeader("Wednesday");
        ScheduleDaysClone.WEDNESDAY.body = buildBody("Wednesday");
        ScheduleDaysClone.THURSDAY.header = buildHeader("Thursday");
        ScheduleDaysClone.THURSDAY.body = buildBody("Thursday");
        ScheduleDaysClone.FRIDAY.header = buildHeader("Friday");
        ScheduleDaysClone.FRIDAY.body = buildBody("Friday");
    }

return ScheduleDaysClone;
};

export {getScheduleDOM };

