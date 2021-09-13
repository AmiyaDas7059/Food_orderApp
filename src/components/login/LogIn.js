import React,{useContext, useRef , useReducer} from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../Store/CartContext';
import classes from './Login.module.css'
let errorName,errorPass;

const reducer =(state,action)=>{
    if (action.type === "USERNAME"){
        errorName='please Fill valid user name';
        // console.log(state);
        return {name : true , pass: state.pass};

    }
    if (action.type === "RESET_NAME"){
        
        return {name : false , pass : state.pass};
    }
    if (action.type === "RESET_PASS"){
        return{ name:state.name,pass:false};
    }
    if (action.type === "RESETALL"){
        errorName='please a valid user name';
        errorPass=' please enter a valid password';
        return {name: true ,pass :true}
    }
    if(action.type === "PASSWORD"){
        errorPass = "Please Fill valid Password"
        console.log(state);
        return {name:state.name, pass:true};
    }
    return state;
}
export default function LogIn(props) {
    const userName = useRef();
    const password= useRef();
    const Ctx = useContext(CartContext)
    const [state,dispatch] = useReducer(reducer,{name:false,pass:false});

    const onSubmitHandler =(event) =>{
        event.preventDefault();
        const loginDetails = {
            name:userName.current.value,
            password:password.current.value,
        }
        // console.log(loginDetails);
        // console.log(Ctx.login);
        if (loginDetails.name.length === 0 || loginDetails.name !== "amiya"){
                dispatch({type : "USERNAME"});
           
        } 
         if (loginDetails.password.length === 0 || loginDetails.password !== "123") {
            dispatch({ type: "PASSWORD" });
        }
        if (loginDetails.name !== 'amiya' && loginDetails.password !== '123' && loginDetails.name.length >0 && loginDetails.password.length > 0 ){
            dispatch({type:"RESETALL"});
        }
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
                <label htmlFor="">User Name
                    {state.name && <p>*{errorName} </p>}</label>
                
                <input type="text" 
                    ref={userName} onClick={()=>dispatch({ type: "RESET_NAME" })}/>
                <label htmlFor="">Password
                   {state.pass && <p>*{errorPass} </p>}</label>
                
                <input type="password"
                    ref={password}  onClick={()=>dispatch({type:"RESET_PASS"})}/>
                
                <button className={classes.button} type = "submit" >Login</button>
                <button className={classes.button} onClick ={props.onClose}>Close </button>
            </form>

        </Modal>
    )
}
