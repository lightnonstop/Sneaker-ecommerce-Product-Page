import React from 'react'
import closeIcon from './assets/ecommerce-product-page-main/images/icon-close.svg'
import './SneakerMobileNavBar.scss';
import { useContext } from 'react';
import { SneakerContext } from './App.jsx';
import { useEffect } from 'react';

const SneakerMobileNavBar = () => {
  const sneakerContext = useContext(SneakerContext);

  let style = {
    translate: "-240px 0px",
  }
  function changestyle(){
    if (!sneakerContext.displayMenuState){
      return style;
    }
    else{
      style.display = "block";
      style.translate = "0px 0px";
      return style
    }
  }

  return (
    <div className="bg">
      <div className='mobile-container' style={changestyle()}>
        {
        <header id='mobile-header'>
          <img onClick={() => {sneakerContext.displayDispatch({type: "displaymenu"})}} src={closeIcon} className="menu-close-icon" alt="close icon" />
          <nav id='mobile-navbar'>
            <ul>
              <li><a href="">collections</a></li>
              <li><a href="">men</a></li>
              <li><a href="">women</a></li>
              <li><a href="">about</a></li>
              <li><a href="">contact</a></li>
            </ul>
          </nav>
        </header>
        }
      </div>
    </div>
  )
}

export default SneakerMobileNavBar