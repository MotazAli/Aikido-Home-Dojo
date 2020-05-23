import * as Actions from './actions'; 
let initialState = {
    contact : null,
    contactMessageSendResult:false
}

const reducer = (state = initialState,action)=>{
    switch(action.type) {
        case Actions.CONTACT:
            return {
                ...state,
                contact:action.payload.contact
            }
        case Actions.SEND_CONTACT_MESSAGE: 
            return {
                ...state,
                contactMessageSendResult:action.payload.result
            }
        
        default: return state
    }
}


export default reducer;