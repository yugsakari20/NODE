import React, { useState } from 'react';
import logo from '../img/logo.png';
import cart_icon from '../img/cart_icon.png';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
     <ul className="nav-menu">
      <li onClick={() =>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
      <li onClick={() =>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
      <li onClick={() =>{setMenu("whomens")}}><Link to='/womens' style={{textDecoration:'none'}}>Whomen</Link>{menu==="whomens"?<hr/>:<></>}</li>
      <li onClick={() =>{setMenu("kids")}}><Link to='/Kids' style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
      <div className="nav-cart-count">
        0
      </div>
     </div>
    </div>
  );
};

export default Navbar;
