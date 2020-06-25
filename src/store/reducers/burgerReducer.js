import * as actionTypes from '../actions/actionTypes';

const PRICES = {
    salad : 40,
    cheese : 15,
    meat : 80,
    bacon : 50
}

const initialState = {
    ingredients : {
        salad : 0,
        bacon : 0,
        cheese : 0,
        meat : 0
    },
    totalPrice : 50,
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case(actionTypes.ADD_INGREDIENT) : 
            return{
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredient] : state.ingredients[action.ingredient] + 1
                },
                totalPrice : state.totalPrice + PRICES[action.ingredient]
            }
        case(actionTypes.REMOVE_INGREDIENT) : 
            return{ 
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredient] : state.ingredients[action.ingredient] - 1
                },
                totalPrice : state.totalPrice - PRICES[action.ingredient]
            }
        case(actionTypes.INIT_BURGER) : 
            return initialState;
        default : 
            return state;

    } 
}

export default reducer;