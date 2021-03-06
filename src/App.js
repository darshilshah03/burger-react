import React from 'react';
import './App.css';
import Layout from  './components/Layout';
import BurgerBuilder from './components/BurgerBuilder';
import Checkout from './components/Checkout';
import {Route,Switch,withRouter,Redirect } from 'react-router-dom';
import Orders from './components/Orders';
import Auth from './components/Auth';
import Logout from './components/Logout';
import {connect} from 'react-redux';
import * as authActions from './store/actions/authAction';

class App extends React.Component {

  componentDidMount() {
    this.props.onAutoSignUp();
  }

  

  render () {

    let routes = <Switch>
       
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to="/" />
      </Switch>

      if(this.props.isAuth)
      {
        routes = <Switch>
        <Route path="/orders" component={Orders} />
        <Route path="/checkout"  component={Checkout}/>
       
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder}/>
        <Redirect to="/" />
      </Switch>
      }

    return (
      <div className="App">
        <Layout >
          {routes}
        </Layout>
      </div>
    );
  } 
}

const mapStateToProps  = state => {
  return{
    isAuth : state.auth.token!==null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignUp : () => dispatch(authActions.autoLogin())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps ) (App));
