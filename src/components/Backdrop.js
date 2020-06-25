import React from 'react';
import '../views/Backdrop.css';

const backdrop = (props) => {
    return (
        props.show ? <div className="Backdrop" onClick={props.clicked}>
            
        </div> : null
    );
}

export default backdrop;