import React from 'react';
import Member from './Member';

const Memebers = props =>(props.teams.map((team,index)=>{
               return <Member  key={index}  />
           }));
        

export default Memebers;