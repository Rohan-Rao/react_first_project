import React from 'react'
import BurgerIngre from './BurgerIngredients/burgerIngredients';
import classes from './Burger.module.css';
const burger = ( props ) => {

    let burger=[];
    for(let i=0;i<Object.keys(props.burgerIngre).length;i++){
        const key = props.burgerIngre[Object.keys(props.burgerIngre)[i]];
        for(let j=0;j<key;j++){
            burger.push(<BurgerIngre type={Object.keys(props.burgerIngre)[i]} key={Object.keys(props.burgerIngre)[i]+j}></BurgerIngre>);
        }
    }
    if(!burger.length){
        burger = <p>Please add some ingredients</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngre type="bread-top"></BurgerIngre>
            {burger}
            <BurgerIngre type="bread-bottom"></BurgerIngre>
        </div>
    )
}

export default burger;