import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    email: ''
}

function userReducer(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.SIGN_IN:
            return {...state, auth: true, email: action.email};
        case types.SIGN_OUT:
            return {...DEFAULT_STATE};//blow it up if you don't want any stored properties
        default:
            return state;
    }
}

export default userReducer;