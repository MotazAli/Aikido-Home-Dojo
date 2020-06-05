import * as actionTypes from './actionTypes';

let initialAuthState = {
    loading:false,
    error:'',
    userId:null,
    token:'',
    tokenExpiresIn:0
};


const reducer =(state = initialAuthState,action)=> {
    switch(action.type){
        case actionTypes.AUTH_START: return {
            ...state,
            loading:action.payload.loading
        }
        case actionTypes.AUTH_FAIL:
        case actionTypes.AUTH_SUCCESS: return {
            ...state,
            loading:action.payload.loading,
            error:action.payload.error,
            userId:action.payload.userId,
            token:action.payload.token,
            tokenExpiresIn:action.payload.tokenExpiresIn
        }
        
        default: return state;

    }
};

export default reducer;