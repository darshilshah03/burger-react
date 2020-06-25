import React from 'react';
import Aux from '../hoc/Aux'
import Burger from './Burger';
import BuildControls from './BuildControls';
import Modal from './Modal';
import OrderSummary from './OrderSummary';
import errorHandler from '../hoc/errorHandler';
import axios from 'axios';
import {connect} from 'react-redux';
import * as burgerActions from '../store/actions/burgerAction';
import * as orderActions from '../store/actions/orderAction';

class BurgerBuilder extends React.Component {

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        totalPrice : 50,
        purchasable : false,
        purchasing : false
    }

    componentDidMount() {
        this.props.onBurgerInit();
    }

     updatePurchased = (ingredients) => {

        const disabled1 = {...ingredients};
        
        for(let key in disabled1){
            disabled1[key] = disabled1[key] >0; 
        }
        
        

        const cur = disabled1['bacon'] | disabled1['cheese'] | disabled1
        ['meat'] | disabled1['salad'];
        
        return cur;
    }

    purchase = () =>  {
        if(!this.props.isAuth){
            this.props.history.push('/auth');
        }
        this.setState({
            purchasing : true
        });
    }

    modalClosed = () =>  {
        this.setState({purchasing:false})
    }

    purchaseContinue = () => {
        // const order = {
        //     ingredients : this.props.ings,
        //     price : this.props.price,
        //     customers : {
        //         name : 'Darshil Shah',
        //         address : {
        //             street : 'ABCD',
        //             country : 'India'
        //         },
        //         email : 'test@yahoo.com'
        //     }
        // };

        // axios.post('https://burger-builder-45437.firebaseio.com/order.json',order).then(response => {
        //     console.log(response);
        //     this.setState({purchasing : false})
        // })

        // let queryParams = [];
        // for(let i in this.props.ings){
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.ings[i]));
        // }
        // queryParams.push("price=" + this.props.price);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname : '/checkout',
        //     search : '?' + queryString

        // }
        // );
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {

        const disabled = {...this.props.ings};
        for(let key in disabled){
            disabled[key] = disabled[key] <=0; 
        }

        
        
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.modalClosed}>
                    <OrderSummary 
                        price = {this.props.price}
                        purchaseCancel = {this.modalClosed}
                        purchaseContinue = {this.purchaseContinue}
                        ingredients={this.props.ings}
                    />
                </Modal>
                <Burger ingredients={this.props.ings}/>
                <div><BuildControls addIngredient={this.props.onIngredientAdded} removeIngredient={this.props.onIngredientRemoved} 
                disabled = {disabled} price = {this.props.price}
                purchasable = {this.updatePurchased(this.props.ings)}
                isAuth = {this.props.isAuth}
                purchase = {this.purchase}/></div>
            </Aux>
        );
    }
}

const mapStatetoProps = state => {
    return{
        ings : state.burger.ingredients,
        price : state.burger.totalPrice,
        isAuth : state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded : (ingredient) => dispatch(burgerActions.addIngredient(ingredient)),
        onIngredientRemoved : (ingredient) => dispatch(burgerActions.removeIngredient(ingredient)),
        onInitPurchase : () => dispatch(orderActions.purchaseInit()),
        onBurgerInit : () => dispatch(burgerActions.burgerInit())
    };
}

export default connect(mapStatetoProps,mapDispatchToProps)(errorHandler(BurgerBuilder,axios));