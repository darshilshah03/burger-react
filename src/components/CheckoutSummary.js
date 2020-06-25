import React from  'react';
import Burger from './Burger';
import '../views/CheckoutSummary.css';

const checkoutSummary = (props) => {
    return(
        <div className="CheckoutSummary">
            <h1>
                Your Burger is ready !!
            </h1>
            <div className="Burger">
                 <Burger ingredients={props.ingredients} />
            </div>
            <p style={{margin : '10px',padding:'10px',alignItems:'center'}}>
                <button onClick ={props.purchaseCancel} style={{padding : '10px',margin:'10px',color:'red',display:'inline',backgroundColor:'black'}}>CANCEL</button>
                <button onClick={props.purchaseContinue} style={{padding : '10px',margin:'10px',color:'green',display:'inline',backgroundColor:'black'}}>CONTINUE</button>
            </p>
        </div>
    );
}

export default checkoutSummary;