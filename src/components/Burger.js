import React from 'react';
import '../views/Burger.css';
import BurgerIngredient from './BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_,i) => {
            return <BurgerIngredient key={key + i} type={key}/>
        })
    }).reduce((arr,el) => {
        return arr.concat(el);
    },[]);

    if(transformedIngredients.length===0){
        transformedIngredients = <p style={{fontWeight:'bold'}}>Please start adding ingredients !!</p>
    }
    
    return(
        <div className="Burger">
             <BurgerIngredient type="bread-top"/>
             {transformedIngredients}
             <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;