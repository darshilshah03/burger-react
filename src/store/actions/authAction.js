import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authSuccess = (authData) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        authData : authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error : error
    }
}

export const authLogout = () => {
    localStorage.clear();
    return {
        type : actionTypes.AUTH_LOGOUT
    }
}

export const logout = (time) => {
    return dispatch => {
        
        setTimeout(() => {
           
            dispatch(authLogout())
        },time*1000);
    }
}

export const auth = (authData,SignUp) => {
    return dispatch => {
        let url = '';
        if(SignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwLSyYkuG26enEAjgcSxNpRfpduMNlAhA';
        }
        else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwLSyYkuG26enEAjgcSxNpRfpduMNlAhA';
        }
        const data = {
            email : authData.email,
            password : authData.password,
            returnSecureToken : true
        }
        axios.post(url,data)
        .then(response => {
            localStorage.setItem('token',response.data.idToken);
            let expirationDate = new Date(new Date() + response.data.expiresIn*1000);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('userId',response.data.localId);
            dispatch(authSuccess(response.data))
            dispatch(logout(response.data.expiresIn))
            console.log(response.data);
        })
        .catch(error => {
            dispatch(authFail(error))
            console.log(error);
        })

    }
}

export const autoLogin = () =>  {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token) { 
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate > new Date()){
                console.log("Hiiiiiii");
                let obj = {
                    idToken : token,
                    localId : localStorage.getItem('userId')
                }
                dispatch(authSuccess(obj))
                let time = (expirationDate.getTime()-(new Date()).getTime());
                console.log(time);
                dispatch(logout(time/1000));
            }
            else{
                dispatch(authLogout())
            }
        }
        else{
            dispatch(authLogout())
        }
    }
}