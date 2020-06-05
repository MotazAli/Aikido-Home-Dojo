import * as actionTypes from './actionTypes';
import axios from '../../server/axios';

const authStart  = ()=>{
    return {
        type:actionTypes.AUTH_START,
        payload:{
            loading : true
        }
    }
};

const authFail= (err)=>{
    return {
        type:actionTypes.AUTH_FAIL,
        payload:{
            loading:false,
            error:err,
            userId:null,
            token:'',
            tokenExpiresIn:0
        }
    }
};




const authSuccess= ({ID , Token , TokenExpiresIn})=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        payload: {
            loading:false,
            userId:ID,
            token:Token,
            tokenExpiresIn:TokenExpiresIn
        }
    }
};

export const authLogin = (data) => dispatch => {
    dispatch(authStart());
    axios.post('/Users/Login',data)
    .then((response)=>{
        if(!response.data.result) dispatch(authFail(response.data.message));

        dispatch(authSuccess(response.data.data));
    })
    .catch((error)=>{
        dispatch(authFail(error));
    });
};

export const authLogout = (userId) => dispatch => {
    dispatch(authStart());
    axios.post('/Users/Logout',{ID:userId})
    .then((response)=>{
        if(!response.data.result) dispatch(authFail(response.data.message));

        dispatch(authFail(''));
    })
    .catch((error)=>{
        dispatch(authFail(error));
    });
};

 