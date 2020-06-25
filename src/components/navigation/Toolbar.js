import React from 'react';
import '../../views/Toolbar.css';
import Logo from '../Logo';
import NavigationItems from '../navigation/NavigationItems';

const toolbar  = (props) => {
    return (
        <header className="Toolbar">
            <div className="Toggle" onClick={props.clicked}>
                <div ></div>
                <div></div>
                <div></div>
            </div>
            <Logo height="80%" />
            <nav className="DesktopOnly">
                <NavigationItems isAuth={props.isAuth}></NavigationItems>
            </nav>
        </header>
    );
}

export default toolbar;