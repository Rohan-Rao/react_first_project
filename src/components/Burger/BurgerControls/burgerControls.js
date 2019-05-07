import React from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';
const burgerControls = ( props ) => {
    const controls = [
        {label: 'Salad', type: 'salad'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Cheese', type: 'cheese'},
        {label: 'Meat', type: 'meat'}
    ]
    return(
        <div className={classes.BuildControls}>
            {controls.map( ctrl => <BurgerControl 
                                        key = {ctrl.label}
                                        label={ctrl.label} 
                                        added={() => props.addIngredient(ctrl.type)}/>)}
        </div>
    )
} 

export default burgerControls;
