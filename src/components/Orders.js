import React from 'react';
import Order from './Order';
import axios from 'axios';
import errorHandler from '../hoc/errorHandler';
import * as orderActions from '../store/actions/orderAction';
import {connect} from 'react-redux';

class Orders extends React.Component{
    
    
    componentDidMount() {
        this.props.onInitOrder(this.props.token,this.props.userId);

    }
    
    render() {
        return(
            <div>
                {this.props.orders.map(order => {
                    return(<Order 
                        ingredients={order.ingredients}
                        price = {order.price}
                        key={order.id} 
                    />);
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders : state.order.orders,
        token : state.auth.token,
        userId : state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitOrder : (token,userId) => dispatch(orderActions.orderStart(token,userId)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( errorHandler(Orders,axios) );