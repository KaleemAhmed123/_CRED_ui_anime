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
import Story from "../components/story/Story";
import AppRating from "../components/Rating/Rating";
import Footer from "../components/footer/Footer";
const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <FeelSpecial />
      <Brands />
      <MobileScroll />
      <WindowPeak />
      <Experience />
      <Security />
      <Story />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
