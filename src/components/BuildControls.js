import React from 'react';
import '../views/BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
    {
        label : 'Salad',
        type : 'salad'
    },

    {
        label : 'Bacon',
        type : 'bacon'
    },
    {
        label : 'Cheese',
        type : 'cheese'
    },
    {
        label : 'Meat',
        type : 'meat'
    }
]

const buildControls = (props) => {

   
    return(
        <div className="BuildControls">  
            <p>Current Price  : {props.price}</p>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label} addIngredient = {() => props.addIngredient(ctrl.type)}
                removeIngredient = {() => props.removeIngredient(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}/>
            })}
            <button onClick={props.purchase} disabled={!props.purchasable} className="Order">{props.isAuth ? "ORDER" : "Sign up to continue"}</button>
        </div>
    )
}

export default buildControls;