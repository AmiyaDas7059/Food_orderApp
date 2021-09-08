import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <h4> <a href="/meals">Meals Avalible</a> </h4>
            <h4><a href="/about">About</a></h4>
            <h4> <a href="/contact">contact Us</a> </h4>

            
            <HeaderCartButton onClick={props.onShowCart} onShowModal={props.onShowModal} name = {props.name} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A Table full of Delicious FOod" />
        </div>
    </>
};
export default Header;