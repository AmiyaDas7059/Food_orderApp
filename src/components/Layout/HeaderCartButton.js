
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) =>{

    const cartCtx= useContext(CartContext);
    const numOfCartItems = cartCtx.items.reduce((curValue,item)=>{
        return curValue+item.amount;
    },0)

    return (!cartCtx.login?  <button className ={classes.button} onClick={props.onShowModal}>LogIn</button> 
    :
    <>
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>{props.name}'s Cart</span>
            <span className={classes.badge}>
                {numOfCartItems}
            </span>
        </button>
        <button className={classes.button} onClick= {cartCtx.isLogOut}>Log Out</button>
    </>
    )
};

export default HeaderCartButton;
