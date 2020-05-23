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


export const getContact = () => dispatch =>{
    axios.get('/Contacts/Contact')
  .then( response => dispatch( setContact(response.data) ) );
}


export const sendContactMessage = (data) => dispatch =>{
    axios.post('/ContactMessage/Message',data)
  .then( response => dispatch( setSentContactMessageResult(response.data) ) );
}