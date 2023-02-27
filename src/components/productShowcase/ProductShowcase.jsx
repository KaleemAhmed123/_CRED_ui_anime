import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState("");
  const ref = useRef(null);

  // returns a array of observers
  const playAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation("scale-in-bottom");
    }
  };

  const options = {
    root: null, // observing with respect to browser's frame of reference {can pass a div section ...}
    rootMargin: "0px", // when hit bottom start observing
    threshold: 0.5, // atleat half part to be visible to call playAnime
  };

  useEffect(() => {
    const observer = new IntersectionObserver(playAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // cleanup
      }
    };
  });
  return (
    <div
      className={`product-showcase ${showAnimation}`}
      scale-in-bottom
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            className="showcase-ui showcase-mockup-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            className="showcase-ui showcase-mockup-2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            className="showcase-ui showcase-mockup-3"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            className="showcase-ui showcase-mockup-4"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            className="showcase-ui showcase-mockup-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
