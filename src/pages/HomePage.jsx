import React from "react";
import Experience from "../components/experience/Experience";
import FeelSpecial from "../components/feelSpecial/FeelSpecial";
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
    </>
  );
};

export default HomePage;
