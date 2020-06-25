import React from 'react';
import Aux from '../hoc/Aux';
import '../views/Layout.css';
import Toolbar from './navigation/Toolbar';
import SideDrawer from './navigation/SideDrawer';
import {connect} from 'react-redux';

class Layout extends React.Component {

    state = {
        showSideDrawer : false
    }

    closeSideDrawer = () => {
        this.setState({showSideDrawer : false});
    }

    toggleSideDrawer = () => {
        const cur = this.state.showSideDrawer;
        this.setState({showSideDrawer:!cur});
    }

    render() {
        return (
            <Aux>
                <div><SideDrawer isAuth = {this.props.isAuth} show={this.state.showSideDrawer} close={this.closeSideDrawer}/></div>
                <div ><Toolbar isAuth = {this.props.isAuth} clicked={this.toggleSideDrawer}/></div>
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
    
}

const mapPropsToState = state => {
    return {
        isAuth : state.auth.token !==null
    }
}

export default connect(mapPropsToState)(Layout);
