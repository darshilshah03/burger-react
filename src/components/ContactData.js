import React from 'react';
import '../views/ContactData.css';
import axios from 'axios';
import errorHandler from '../hoc/errorHandler';
import {connect} from 'react-redux';
import * as orderActions from '../store/actions/orderAction';

class ContactData extends React.Component{
    
    state = {
        orderForm : {
            name : '',
            email : '',
            street : '',
            postalCode : '',
            city : '',
            deliveryMethod : 'Fastest'
        }
        
    }

    orderHandler = (event) => {
        event.preventDefault();

        const order = {
            ingredients : this.props.ingredients,
            price : this.props.totalPrice,
            customers :  this.state.orderForm,
            userId : this.props.userId
        };

        this.props.onOrderBurger(order,this.props.token);

        // axios.post('https://burger-builder-45437.firebaseio.com/order.json',order).then(response => {
        //     this.props.history.push('/');
        //     console.log(response);
           
        // })



    }

    changeHandler = (event) => {
        // switch(event.target.name)  {
        //     case('name') :
        //         this.setState({name : this.state.value});
        //         break;
        //     case('email') :
        //         this.setState({email : this.state.value});
        //         break;
        //     case('street') :
        //         this.setState({street : this.state.value});
        //         break;
        //     case('pcode') :
        //         this.setState({postalCode : this.state.value});
        //         break;
        //     case('city') :
        //         this.setState({city : this.state.value});
        //         break;
        //     case('deliveryMethod') :
        //         this.setState({deliveryMethod : this.state.value});
        //         break;
            
        //     default : 
        //         break;
        // }
        let updateProduct = {...this.state.orderForm};
        updateProduct[event.target.name] = event.target.value;
        this.setState({orderForm : updateProduct});
        
    }
    
    render() {
        return (
            <div className="ContactData">
                <h4>Please enter the data !</h4>
                <form onSubmit={this.orderHandler}>
                    <input type="text" className="Input"  value={this.state.orderForm.name} name="name" placeholder="Enter your Name" onChange={this.changeHandler}/>
                    <input type="email" className="Input"  value={this.state.orderForm.email} name="email" placeholder="Enter your Email" onChange={this.changeHandler}/>
                    <input type="text" className="Input" value={this.state.orderForm.street} name="street" placeholder="Enter your Street" onChange={this.changeHandler}/>
                    <input type="number" className="Input" value={this.state.orderForm.postalCode} name="postalCode" placeholder="Enter your Postal Code" onChange={this.changeHandler}/>
                    <input type="text" className="Input" value={this.state.orderForm.city} name="city" placeholder="Enter your City" onChange={this.changeHandler}/>
                    <select className="Input" name="deliveryMethod" value={this.state.orderForm.deliveryMethod} onChange={this.changeHandler}>
                        <option value="fastest">Fastest</option>
                        <option value="cheapest">Cheapest</option>
                    </select>
                    <button className="btn">ORDER</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ingredients : state.burger.ingredients,
        totalPrice : state.burger.totalPrice,
        token : state.auth.token,
        userId : state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger : (data,token) => dispatch(orderActions.purchaseBurgerStart(data,token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(errorHandler( ContactData,axios));


