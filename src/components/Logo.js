import React from 'react';
import burgerLogo from '../assets/images/burgerLogo.png';
import '../views/Logo.css';

const logo = (props) => {
    return (
        <div className="Logo" style={{height:props.height}}>
            <img src={burgerLogo} alt="Burger"></img>
        </div>
    )
}

export default logo;
