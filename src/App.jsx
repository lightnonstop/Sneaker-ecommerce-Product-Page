import * as React from "react";
import NavigationBar from "./NavigationBar.jsx";
import SneakerPhotoGallery from "./SneakerPhotoGallery.jsx";
import SneakerDetailsAndUserAction from "./SneakerDetailsAndUserAction.jsx";
import CheckoutSneakerPhotogallery from "./CheckoutSneakerPhotogallery.jsx";
import SneakerMobileNavBar from "./SneakerMobileNavBar.jsx";
import "./responsiveApp.scss";
import SneakerCatalogue from "./SneakerCatalogue.jsx";
import { useReducer } from "react";
import {
  initialStates,
  displayNavMenuReducer,
  quantityReducer, displayQuantityOnTopReducer, sneakerGalleryReducer
} from "./Reducers.jsx";
import { useState } from "react";

export const SneakerContext = React.createContext();
export const sneakerPrice = 250;
export const sneakerDiscPerc = 50;
export const discountedPrice = sneakerPrice * sneakerDiscPerc / 100;
function App() {
//USESTATES

  const [onTopQuantity, setOnTopQuantity] = useState(0);
  const [displayCat, setDisplayCat] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(false);
  const [slidesPhoto, setSlidesPhoto] = useState(0);


//USEREDUCERS

  const [quantity, dispatch1] = useReducer(quantityReducer, initialStates);
  const [displayMenu, dispatch2] = useReducer(
    displayNavMenuReducer,
    initialStates
  );
  const [displayOnTop, dispatch3] = useReducer(
    displayQuantityOnTopReducer,
    initialStates
  );
  const [sneakerPhotoArr, dispatch4] = useReducer(
    sneakerGalleryReducer,
    initialStates
  );



  const style = {
    display: "flex",
    padding: "5rem 0",
    gap: "6rem",
    alignItems: "center",
    margin: "8rem 4.0rem",
  };
  return (
    <SneakerContext.Provider
      value={{
        quantityState: quantity.quantity,
        quantityDispatch: dispatch1,

        displayMenuState: displayMenu.displayNavMenu,
        displayDispatch: dispatch2,

        displayOnTopState: displayOnTop.displayQuantityOnTop,
        displayOnTopDispatch: dispatch3,

        photoArrState: sneakerPhotoArr.sneakerGallery,
        photoArrDispatch: dispatch4,
      }}
    >
      <div>
        <NavigationBar onTopQuantity={onTopQuantity} displayCat={displayCat} setDisplayCat={setDisplayCat}/>
        <SneakerMobileNavBar />
        <div className="photoGallery-details" style={style}>
          <SneakerPhotoGallery slidesPhoto={slidesPhoto}
          setSlidesPhoto={setSlidesPhoto}/>
          <SneakerDetailsAndUserAction setOnTopQuantity={setOnTopQuantity}/>
        </div>
        <SneakerCatalogue displayCat={displayCat} setDisplayCat={setDisplayCat} onTopQuantity={onTopQuantity} setOnTopQuantity={setOnTopQuantity} displayCheckout={displayCheckout} setDisplayCheckout={setDisplayCheckout}/>
        <CheckoutSneakerPhotogallery 
        displayCheckout={displayCheckout}
        setDisplayCheckout={setDisplayCheckout}
        slidesPhoto={slidesPhoto}
        setSlidesPhoto={setSlidesPhoto}/>
      </div>
    </SneakerContext.Provider>
  );
}
export default App;
