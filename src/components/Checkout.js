import React from 'react';
import CheckoutSummary from './CheckoutSummary';
import {Route,Redirect} from 'react-router-dom';
import ContactData from './ContactData';
import {connect} from 'react-redux';

class Checkout extends React.Component{

    state = {
        ingredients : {
            salad : 0,
            meat : 0,
            cheese : 0,
            bacon : 0
        },
        totalPrice : 0
    }

    // componentDidMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     let ingredients = {};
    //     let price = 0;
    //     for(let i of query.entries()){
    //         if(i[0]==='price'){
    //             price = +i[1];
    //         }
    //         else
    //         ingredients[i[0]] = +i[1];
    //     }
    //     this.setState({ingredients:ingredients,totalPrice : price});
    // }

    purchaseCancel = () => {
        this.props.history.goBack();
    }

    purchaseContinue = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {

        const red = this.props.purchased ? <Redirect to="/" /> : null;
        return (
            <div>
                {red}
                <CheckoutSummary purchaseCancel = {this.purchaseCancel} purchaseContinue={this.purchaseContinue} ingredients={this.props.ings} />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ings : state.burger.ingredients,
        purchased : state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);