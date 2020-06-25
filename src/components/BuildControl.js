import React from 'react';
import '../views/BuildControl.css'; 

const buildControl = (props) => {
    return(
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button onClick={props.removeIngredient} disabled={props.disabled}>Less</button>
            <button onClick={props.addIngredient}>More</button>
        </div>
    );   
}

export default buildControl;