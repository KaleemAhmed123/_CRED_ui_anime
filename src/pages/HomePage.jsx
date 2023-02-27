import React from "react";
import Experience from "../components/experience/Experience";
import FeelSpecial from "../components/feelSpecial/FeelSpecial";
import Security from "../components/security/Security";
import Header from "../components/header/Header";
import Brands from "../components/brands/Brands";
import Hero from "../components/heroSection/Hero";
import ProductShowcase from "../components/productShowcase/ProductShowcase";
import WindowPeak from "../components/peak/WindowPeak";
import MobileScroll from "../components/mobileScroll/MobileScroll";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <FeelSpecial />
      <Brands />
      <MobileScroll />
      <Experience />
      {/* <div className="non-mobile"> */}
      <WindowPeak />
      {/* </div> */}
      <Security />
    </>
  );
};

export default HomePage;
