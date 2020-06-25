import React from 'react';
import '../../views/NavigationItems.css';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => {
    
    let it = <NavigationItem link="/auth">Authenticate</NavigationItem>;
    if(props.isAuth)
    it = <NavigationItem link="/logout">Logout</NavigationItem>
    
    return(
        <div >
            <ul className="NavigationItems">
                <NavigationItem link="/" >Burger Builder</NavigationItem>
                {props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
                {it}
            </ul>
        </div>
    );
}

export default navigationItems;