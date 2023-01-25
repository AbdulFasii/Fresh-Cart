import React from "react";

import Slider from "./Slider";
import FeaturedCategories from "./Featured-categories";
import PopProducts from "./Popular-Products.js";
import BestSellProducts from "./Best-Sells";
import Features from "./Features";

export const HomePage = () => {
  return (
    <>
      <Slider />
      <FeaturedCategories />
      <PopProducts />
      <BestSellProducts />
      <Features />
    </>
  );
};
