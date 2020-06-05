import * as Actions from './actions'; 
let initialState = {
    contact : null,
    contactMessageSendResult:false,
    schedule:null,
    teams:null,
    teamTypes: null
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
        case Actions.SCHEDULE:
            return {
                ...state,
                schedule:action.payload.result
            }
        case Actions.GET_TEAMS:
            return {
                ...state,
                teams: action.payload.result
            }
        case Actions.GET_TEAM_TYPES:
            return {
                ...state,
                teamTypes: action.payload.result
            }
        
        default: return state
    }
}


export default reducer;