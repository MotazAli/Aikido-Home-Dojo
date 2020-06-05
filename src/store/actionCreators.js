import * as Actions from './actions';
import axios from '../server/axios';

const setContact = value =>{
    return {
        type : Actions.CONTACT,
        payload : {
            contact : value
        }
    }
}


const setSentContactMessageResult = value =>{
    return {
        type : Actions.SEND_CONTACT_MESSAGE,
        payload:{ 
            result : value 
        }
    }
}


const setSchadule = (value)=>{
    return {
        type:Actions.SCHEDULE,
        payload:{
            result:value
        }
    }
}


export const getContact = () => dispatch =>{
    axios.get('/Contacts/Contact')
  .then( response => dispatch( setContact(response.data) ) );
}


export const sendContactMessage = (data) => dispatch =>{
    axios.post('/ContactMessage/Message',data)
  .then( response => dispatch( setSentContactMessageResult(response.data) ) );
}

export const getSchedule = () => dispatch =>{
    axios.get('/Schedules')
    .then(response => dispatch(setSchadule(response.data)));
}


const teams=(data)=>{
    return {
        type:Actions.GET_TEAMS,
        payload :{
            result : data
        }
    }
}


export const getTeams = () => dispatch => {
    axios.get('/Teams/Team')
    .then(response => dispatch(teams(response.data)) );
}


const teamTypes=(data) => {
    return {
        type:Actions.GET_TEAM_TYPES,
        payload : {
            result:data
        }
    }
}

export const getTeamTypes = () => dispatch => {
    axios.get('/Teams/TeamType')
    .then(response => dispatch( teamTypes(response.data) )  );
}