import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm =(props)=>{
    const amountInputRef = useRef();
    const [amountISvalid, setamountISvalid] = useState(true)

    const submitHandler =(event)=>{
        event.preventDefault();
        const enterAmount = amountInputRef.current.value;
        const enteredAmountNumber= +enterAmount;
        console.log(enterAmount);
        if (enterAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setamountISvalid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label='Amount' input={{
            
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
        <button>+ Add</button>
        {!amountISvalid && <p> Please enter a valid amount (1-5).</p>}
    </form>
};
export default MealItemForm;