import React from 'react';
import '../../views/NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => {

    return(
        <li className="NavigationItem">
            <NavLink exact to={props.link}>{props.children}</NavLink>
        </li>
    );
}

export default navigationItem;