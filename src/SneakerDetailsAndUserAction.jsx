import React from "react";
import "./SneakerDetailsAndUserAction.scss";
import cartIcon from './assets/ecommerce-product-page-main/images/icon-cart-white.svg'
import { useContext } from "react";
import { SneakerContext } from "./App.jsx";
import { sneakerPrice, sneakerDiscPerc, discountedPrice } from "./App.jsx";
const SneakerDetailsAndUserAction = ({setOnTopQuantity}) => {
  const sneakerContext = useContext(SneakerContext);

  const actions = {
    addItem: {
      type: "additem",
    },  
    removeItem: {
      type: "removeitem",
    },
    displayOnTop: {
      type: "displayontop",
    }
  }
  return (
    <div>
      <section id="details-action">
        <div className="details">
          <span>sneaker company</span>
          <h1>fall limited edition sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="values">
          <section>
            <span>${discountedPrice}.00</span>
            <span>{sneakerDiscPerc}%</span>
          </section>
          <span id="discount">${sneakerPrice}.00</span>
        </div>
        <div className="action">
          <button>
            <span onClick={() => {sneakerContext.quantityDispatch(actions.removeItem)}}>-</span>
            <span>{sneakerContext.quantityState}</span>
            <span onClick={() => {sneakerContext.quantityDispatch(actions.addItem)}}>+</span>
          </button>
          <button onClick={() => {setOnTopQuantity(sneakerContext.quantityState);}}>
            <img src={cartIcon} alt="cart icon" />
            <span>Add to cart</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default SneakerDetailsAndUserAction;
