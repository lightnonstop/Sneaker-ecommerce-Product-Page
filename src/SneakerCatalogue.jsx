import React from "react";
import thumbnail1 from "./assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
import deleteIcon from "./assets/ecommerce-product-page-main/images/icon-delete.svg";
import "./SneakerCatalogue.scss";
import { discountedPrice } from "./App.jsx";

const SneakerCatalogue = ({ displayCat, onTopQuantity, setOnTopQuantity, displayCheckout, setDisplayCheckout, setDisplayCat }) => {

  const style = {
    justifyContent: "center",
    alignItems: "center"
  }

  function styleconditon(){
    if (onTopQuantity){
      style.flexDirection = "column";
      delete style.justifyContent;
      delete style.alignItems;
      return style;
    }
    else{ 
      return style
    }
  }
  return (
    <div>
      {displayCat && (
        <section className="catalogue-container" style={styleconditon()}>
          {
            onTopQuantity ?
            (<>
              <h3>cart</h3>
              <div className="inner">
                <img src={thumbnail1} alt="thumbnail1" />
                <div className="fs-wrapper">
                  <p>fall limited edition...</p>
                  <div className="sec-wrapper">
                    <span className="mark-price-quantity">${discountedPrice}.00 x {onTopQuantity}</span>
                    <span className="total">${discountedPrice * onTopQuantity}.00</span>
                  </div>
                </div>
                <img
                  onClick={() => setOnTopQuantity(0)}
                  src={deleteIcon}
                  alt="delete icon"
                />
              </div>
              <button onClick={() => {setDisplayCheckout(true); setDisplayCat(!displayCat)}} className="checkout">checkout</button>
            </>) : (<p>
              Your cart is empty.
            </p>)
          }
        </section>
      )}
    </div>
  );
};

export default SneakerCatalogue;
