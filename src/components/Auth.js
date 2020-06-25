import React from 'react';
import '../views/Auth.css';
import { connect } from 'react-redux';
import * as authActions from '../store/actions/authAction';
import { Redirect } from 'react-router-dom';

class Auth extends React.Component {

    state = {
        authData : {
            email : '',
            password : ''
        },
        SignUp : false
    }

    changeHandler = (event) => {
        let updateProduct = {...this.state.authData};
        updateProduct[event.target.name] = event.target.value;
        this.setState({authData : updateProduct});
        
    }

    authHandler = (event) => {
        event.preventDefault();
       this.props.onSubmit(this.state.authData,this.state.SignUp);
    }

    toggleSignUp = () => {
        this.setState({SignUp :!this.state.SignUp});
    }

    render() {

        let errorMessage = null;
        if(this.props.error){
            errorMessage = (<p style={{color:'red'}}>
               ERROR :  {this.props.error.message}
            </p>)
        }

        return(
            
            <div className="Auth">
                {this.props.isAuth ? <Redirect to="/" /> : null}
                {errorMessage}
                <h4>Please enter the data !</h4> 
                <form onSubmit={this.authHandler}>
                    <input type="email" className="Input"  value={this.state.authData.email} name="email" placeholder="Enter your Email" onChange={this.changeHandler}/>
                    <input type="password" className="Input" value={this.state.authData.password} name="password" placeholder="Enter your password" onChange={this.changeHandler}/>
                    <button className="btn">SUBMIT</button>
                </form>
                <button onClick={this.toggleSignUp} className="btn" style={{backgroundColor : 'red'}}>Switch to {this.state.SignUp ? 'SIGN IN' : 'SIGN UP'}</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error : state.auth.error,
        isAuth : state.auth.token != null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit : (authData,SignUp) => dispatch(authActions.auth(authData,SignUp))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Auth);