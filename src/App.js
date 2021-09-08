import React, { useState,useContext } from 'react'
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import CartPorvider from './Store/CartProvider';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from './components/Layout/About';
import Contact from './components/Layout/Contact';
import LogIn from './components/login/LogIn';
import CartContext from './Store/CartContext';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const Ctx = useContext(CartContext);
  const [login, setloginModal] = useState(false);
  const [name,setName]=useState('');
  const showModalHandler =()=>{
    setloginModal(true);
  }

const hideModalHandler=()=>{
  setloginModal(false)
}

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  const LoginameHandler=(name)=>{
    setName(name);
  }
  return (
    <CartPorvider>
      <Header onShowCart={showCartHandler} onShowModal={showModalHandler} name={name} />
      {console.log(Ctx.loginModal)}
      {login && <LogIn onClose={hideModalHandler} onLoginName={LoginameHandler}/>}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
     
      <Switch >
        {/* <Route exact path='/' to="/meals" /> */}
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/meals" component={Meals} />
        <Redirect from='/' to='/meals' />
        {/* <Meals /> */}
      </Switch>

    </CartPorvider>

  );
}

export default App;
