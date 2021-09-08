import React from 'react';

const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    login:false,    
    addItem:(item) =>{},
    removeIem:(id)=>{},
    isLogIn:()=>{},
    isLogOut : ()=>{},
   
})
export default CartContext;
