import React from 'react';
import productLogo from './assets/ecommerce-product-page-main/images/logo.svg';
import cartIcon from './assets/ecommerce-product-page-main/images/icon-cart-grey.svg';
import userAvatar from './assets/ecommerce-product-page-main/images/image-avatar.png'
import './NavigationBar.scss';
import menuIcon from './assets/ecommerce-product-page-main/images/icon-menu.svg';
import { useContext } from "react";
import { SneakerContext } from "./App.jsx";
import { useEffect } from 'react';
const NavigationBar = ({onTopQuantity, displayCat, setDisplayCat}) => {
  const sneakerContext = useContext(SneakerContext);

  const actions = {
    dislayMenu: {
      type: 'displaymenu'
    }
  }
  useEffect(() => {
    document.querySelector('.menu').addEventListener('click', () => {
      document.querySelector('.bg').classList.add('overlay2');
    })
    document.querySelector('.menu-close-icon').addEventListener('click', () => document.querySelector('.bg').classList.remove('overlay2')
    )
  })
  return (
    <div style={{width: "100px"}}>
      <header id='desk-header'>
        <div className='menu-icon-logo-container'>
          <img className='menu' onClick={() => {sneakerContext.displayDispatch(actions.dislayMenu)}} src={menuIcon} alt="menu icon" />
          <img className='logo' src={productLogo} alt="product logo" />
        </div>
        <nav id='desk-navbar'>
          <ul>
            <li><a href="">collections</a></li>
            <li><a href="">men</a></li>
            <li><a href="">women</a></li>
            <li><a href="">about</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </nav>
        <div className='cart-icon-avatar-container'>
          <div id='wrap-cart-quantity'>
            <img onClick={() => {setDisplayCat(!displayCat)}} className='cart' src={cartIcon} alt="cart icon" />
            {onTopQuantity > 0 &&
              <div className='quantity-on-top'>{onTopQuantity}</div>}
          </div>
          <img className='avatar' src={userAvatar} alt="user avatar" />
        </div>
      </header>
    </div>
  );
}
export default NavigationBar
