import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';
import { connect } from 'react-redux';

export const purchaseBurgerSuccess = (id,data) => {
    console.log("dispatch success" )
    return {
        type : actionTypes.PURCHASE_BURGER_SUCCESS,
        id : id,
        data : data
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type : actionTypes.PURCHASE_BURGER_FAIL,
        error : error
    }
};

export const purchaseBurgerStart = (data,token) => {
    return dispatch => {
        axios.post('https://burger-builder-45437.firebaseio.com/order.json?auth='+token,data).then(response => {
           dispatch(purchaseBurgerSuccess(response.data.name,data))
        })
        .catch (error => {
            dispatch(purchaseBurgerFail(error));
        })
    }
};

export const purchaseInit = () => {
    return {
        type : actionTypes.PURCHAE_INIT
    }
};

export const orderSuccess  = (orders) => {
    return {
        type : actionTypes.ORDER_SUCCESS,
        orders : orders
    }
}

export const orderFail = (error) => {
    return {
        type : actionTypes.ORDER_FAIL,
        error : error
    }
}


export const orderStart = (token,userId) => {
    return dispatch => {
        console.log(userId)
        let queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'; 
        axios.get('https://burger-builder-45437.firebaseio.com/order.json' + queryParams)
        .then(res => {
            console.log(res.data);
            let fetchedOrders = [];
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id : key
                })
            }
            console.log(fetchedOrders);
            dispatch(orderSuccess(fetchedOrders));
        }).catch(err => {
            dispatch(orderFail(err));
        });
    }
}