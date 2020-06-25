import * as actionType from '../actions/actionTypes';

const initialState = {
    token : null,
    userId : null,
    error : null,
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case (actionType.AUTH_SUCCESS) :
            return {
                ...state,
                token : action.authData.idToken,
                userId : action.authData.localId  
            }
        case (actionType.AUTH_FAIL) :
            return {
                ...state,
                error : action.error 
            }
        case (actionType.AUTH_LOGOUT) :
            return initialState;
        default : 
            return state;
    }
}

export default reducer;