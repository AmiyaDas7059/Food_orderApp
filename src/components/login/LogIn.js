import React,{useContext, useRef} from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../Store/CartContext';
import classes from './Login.module.css'
export default function LogIn(props) {
    const userName = useRef();
    const password= useRef();
    const Ctx = useContext(CartContext)

    const onSubmitHandler =(event) =>{
        event.preventDefault();
        const loginDetails = {
            name:userName.current.value,
            password:password.current.value,
        }
        // console.log(loginDetails);
        // console.log(Ctx.login);
        if (loginDetails.name === 'amiya' && loginDetails.password === '123')
        {
            Ctx.isLogIn();
            // alert(`Dear ${loginDetails.name} You have Successfully Loged IN`);
            props.onLoginName(loginDetails.name);
            props.onClose();

        }

        // Ctx.isLogIN();
    }
    return (
        <Modal onClose={props.onClose}>
            
            <form onSubmit={onSubmitHandler} className={classes.login}>
                <label htmlFor="">User Name</label>
                <input type="text" 
                    ref={userName}/>
                <label htmlFor="">Password</label>
                <input type="password"
                    ref={password} />
                
                <button className={classes.button} type = "submit" >Login</button>
                <button className={classes.button} onClick ={props.onClose}>Close </button>
            </form>

        </Modal>
    )
}
