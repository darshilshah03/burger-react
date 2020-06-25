import React from 'react';
import Logo from '../Logo';
import NavigationItems from './NavigationItems';
import '../../views/SideDrawer.css';
import BackDrop from '../Backdrop';
import Aux from '../../hoc/Aux';

const sideDrawer = (props) => {

    let cl = 'SideDrawer Close';
    if(props.show){
        cl = 'SideDrawer Open'
    }

    return(
        <Aux>
            <BackDrop clicked={props.close} show={props.show}/>
            <div className={cl} onClick={props.close}>
            
                <Logo height="11%"/>
                
                <br></br>
                <br></br>
                <nav >
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
            </div>
    
        </Aux>
        );
}

export default sideDrawer;