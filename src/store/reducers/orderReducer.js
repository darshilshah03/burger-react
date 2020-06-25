import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders : [],
    purchased : false
}

const reducer  = (state = initialState,action) => {
    switch(action.type) {
        case(actionTypes.PURCHASE_BURGER_SUCCESS) : 
            let newOrder = {
                ...action.data,
                id : action.id
            }
            const newArr = [...state.orders];
            newArr.push(newOrder);
            
            return {
                ...state,
                orders : newArr,
                purchased : true
            }
        
        case(actionTypes.PURCHASE_BURGER_FAIL) : 
            return {
                ...state,

            }
        case(actionTypes.PURCHAE_INIT) : 
            return{
                ...state,
                purchased : false
            }
        case (actionTypes.ORDER_SUCCESS) : 
            return {
                ...state,
                orders : action.orders
            }
        case (actionTypes.ORDER_FAIL) : 
            return {
                ...state
            }
        default : 
            console.log("Default")
            return state;
    }
}

export default reducer;