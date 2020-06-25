import React from 'react';

const orderSummary = (props) => {
    
    const ing = Object.keys(props.ingredients).map((key) => {
    return <li style={{textTransform : 'capitalize'}}key={key}>{key}  :  {props.ingredients[key]}</li>
    });
    
    return(
        <div>
            <h1>Your order</h1>
            <p>Your burger has the following ingredients.</p>
            <ul>
                {ing}
            </ul>
            <p style={{fontSize : 20}}>
                <strong>Total Price : {props.price} .</strong>
            </p>
            <p>
                Proceed to Checkout ?
            </p>
            <p style={{margin : '10px',padding:'10px',alignItems:'center'}}>
                <button onClick ={props.purchaseCancel} style={{padding : '10px',margin:'10px',color:'red',display:'inline',backgroundColor:'black'}}>CANCEL</button>
                <button onClick={props.purchaseContinue} style={{padding : '10px',margin:'10px',color:'green',display:'inline',backgroundColor:'black'}}>CONTINUE</button>
            </p>
            
        </div>
    )
}

export default orderSummary;