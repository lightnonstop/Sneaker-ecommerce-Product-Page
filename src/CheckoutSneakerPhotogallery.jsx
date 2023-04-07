import React from "react";
import "./CheckoutSneakerPhotogallery.scss";
import thumbnail1 from "./assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./assets/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./assets/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./assets/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg";
import { useContext } from "react";
import { SneakerContext } from "./App.jsx";
import { useEffect } from "react";

const CheckoutSneakerPhotogallery = ({
  displayCheckout,
  setDisplayCheckout, slidesPhoto, setSlidesPhoto
}) => {
  const sneakerContext = useContext(SneakerContext);
  let bigImage = "";
  useEffect(() => {
    document.querySelectorAll(".thumbnails").forEach((thumbnail) => {
      if (sneakerContext.photoArrState[thumbnail.id]) {
        thumbnail.style.border = "3px solid orange";
        bigImage = document.querySelectorAll(".big-image")[0].src;
        if (displayCheckout) {
          document.querySelectorAll(".big-image")[1].src = bigImage;
        }
      } else {
        thumbnail.style.border = "none";
      }
    });
  });

  useEffect(() => {
    if (displayCheckout){
      sneakerContext.photoArrDispatch({ type: String(slidesPhoto)});
    }
  }, [slidesPhoto])
  return (
    <div>
      {displayCheckout && (
        <div className="overlay">
          <section id="checkout-gallery">
          <div id="checkout-wrap-big-image">
            <svg
              onClick={() => setDisplayCheckout(false)}
              className="checkout-close"
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
            <svg onClick={() => { setSlidesPhoto((() => {
              var remain = (slidesPhoto - 1) % 4;
              return Math.floor(remain >= 0 ? remain : remain + 4)
            })())}}
              className="checkout-previous"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
            <img className="big-image" alt="big image" />
            <svg onClick={() => { setSlidesPhoto((() => {
              var remain = (slidesPhoto + 1) % 4;
              return Math.floor(remain >= 0 ? remain : remain + 4)
            })())}}
              className="checkout-next"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </div>
          <div id="checkout-wrap-thumbnails">
            <img
              onClick={() => {
                sneakerContext.photoArrDispatch({ type: "0" });
              }}
              className="thumbnails"
              id="0"
              src={thumbnail1}
              alt=""
            />
            <img
              onClick={() => sneakerContext.photoArrDispatch({ type: "1" })}
              className="thumbnails"
              id="1"
              src={thumbnail2}
              alt=""
            />
            <img
              onClick={() => sneakerContext.photoArrDispatch({ type: "2" })}
              className="thumbnails"
              id="2"
              src={thumbnail3}
              alt=""
            />
            <img
              onClick={() => {
                sneakerContext.photoArrDispatch({ type: "3" });
              }}
              className="thumbnails"
              id="3"
              src={thumbnail4}
              alt=""
            />
          </div>
        </section>
        </div>
      )}
    </div>
  );
};

export default CheckoutSneakerPhotogallery;
