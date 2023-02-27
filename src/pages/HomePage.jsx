import React from "react";
import Experience from "../components/experience/Experience";
import FeelSpecial from "../components/feelSpecial/FeelSpecial";
import Security from "../components/security/Security";
import Header from "../components/header/Header";
import Hero from "../components/heroSection/Hero";
import ProductShowcase from "../components/productShowcase/ProductShowcase";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <FeelSpecial />
      <Experience />
      <Security />
    </>
  );
};

export default HomePage;
