import React from 'react';
import '../views/Order.css';

const order = (props) => {

    let ing = [];
    for(let i in props.ingredients) {
        ing.push({
            name : i,
            amount : props.ingredients[i]
        });
    }

    let op = ing.map(ig => {
    return (<span style={{textTransform : 'capitalize',display:'inline-block',margin:'0 8px',border:'1px solid grey',padding:'5px'}}>{ig.name }  ({ig.amount})</span>);
    })

    return(
        <div className="Order">
            <p>Ingredients :    </p>
            <p>{op}</p>
            <p>Price : <strong>{props.price}</strong></p>
        </div>
    );
}


export default order;