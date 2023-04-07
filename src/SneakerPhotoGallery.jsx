import React from "react";
import "./SneakerPhotoGallery.scss";
import thumbnail1 from "./assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./assets/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./assets/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./assets/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg";
import { useContext } from "react";
import { SneakerContext } from "./App.jsx";
import { useEffect } from "react";
import { sneakerData } from "./sneakers.js";
const SneakerPhotoGallery = ({slidesPhoto, setSlidesPhoto}) => {
  const sneakerContext = useContext(SneakerContext);

  let bigImage = "";

  useEffect(() => {
    document.querySelectorAll(".thumbnails").forEach((thumbnail) => {
      if (sneakerContext.photoArrState[thumbnail.id]) {
        thumbnail.style.border = "3px solid orange";
        thumbnail.style.opacity = "0.4";
        bigImage = sneakerData[thumbnail.id].bigimage;
        document.querySelector(".big-image").src = bigImage;
      } else {
        thumbnail.style.border = "none";
        thumbnail.style.opacity = "1";
      }
    });
  });

  useEffect(() => {
    sneakerContext.photoArrDispatch({ type: String(slidesPhoto)});
  }, [slidesPhoto]);
  return (
    <div>
      <section id="gallery">
        <div id="wrap-big-image">
          <svg onClick={() => { setSlidesPhoto((() => {
              var remain = (slidesPhoto - 1) % 4;
              return Math.floor(remain >= 0 ? remain : remain + 4)
            })())}}
            className="previous"
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
            className="next"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
          </svg>
        </div>
        <div id="wrap-thumbnails">
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
  );
};

export default SneakerPhotoGallery;
