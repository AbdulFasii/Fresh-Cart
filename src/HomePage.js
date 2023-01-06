import React from "react";

import Slider from "./Slider";
import FeaturedCategories from "./Featured-categories";
import PopProducts from "./Popular-Products.js";
import BestSellProducts from "./Best-Sells";
import Features from "./Features";
import Footer from "./Footer";

export const HomePage = () => {
  return (
    <>
    <div>
      <Slider />
      <FeaturedCategories />
      <PopProducts />
      <BestSellProducts />
      <Features />
      
    </div>
    <Footer />
    </>
  );
};
