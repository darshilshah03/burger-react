import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as authAction from '../store/actions/authAction';

class Logout extends React.Component {
    
    componentDidMount() {
        this.props.onLogout();
    }
    
    render() {
        return (<Redirect to="/" />);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout : () => dispatch(authAction.authLogout())
    }
}

export default connect(null,mapDispatchToProps) (Logout);