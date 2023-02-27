import React from "react";
import Experience from "../components/experience/Experience";
import FeelSpecial from "../components/feelSpecial/FeelSpecial";
import Security from "../components/security/Security";
import Header from "../components/header/Header";
import Brands from "../components/brands/Brands";
import Hero from "../components/heroSection/Hero";
import ProductShowcase from "../components/productShowcase/ProductShowcase";
import WindowPeak from "../components/peak/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <FeelSpecial />
      <Brands />
      <Experience />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <Security />
    </>
  );
};

export default HomePage;
