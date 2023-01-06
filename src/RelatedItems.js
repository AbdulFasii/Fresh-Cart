import React from "react";
import Wrapper from "./Wrapper";
import {PopularProduct} from "./Popular-Products";
export const RelatedItems = () => {
  return (
    <div className="mb-5">
      <Wrapper title={"RelatedItems"} content={
                <>
                <PopularProduct
                  img={
                    "https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg"
                  }
                  categorie={"Snack & Munchies"}
                  title={"Onion Flavour Potato"}
                  rating={"3"}
                  response={"123"}
                  offerRate={"25"}
                  actulRate={"30"}
                />
                <PopularProduct
                  img={
                    "https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg"
                  }
                  categorie={"Instant Food"}
                  title={"Salted Instant Popcorn"}
                  rating={"4"}
                  response={"64"}
                  offerRate={"42"}
                  actulRate={"50"}
                />
                <PopularProduct
                  img={
                    "https://freshcart.codescandy.com/assets/images/products/product-img-6.jpg"
                  }
                  categorie={"Dairy,Bread & Eggs"}
                  title={"Blueberry Greek Yogurt"}
                  rating={"5"}
                  response={"23"}
                  offerRate={"250"}
                  actulRate={"300"}
                />
                <PopularProduct
                  img={
                    "https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg"
                  }
                  categorie={"Bakery & Biscuits"}
                  title={"Cadbury 5 Star Chocolate"}
                  rating={"4"}
                  response={"93"}
                  offerRate={"18"}
                  actulRate={"20"}
                />
                <PopularProduct
                  img={
                    "https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg"
                  }
                  categorie={"Bakery & Biscuits"}
                  title={"NutriChoice Digestive"}
                  rating={"3"}
                  response={"87"} 
                  offerRate={"35"}
                  actulRate={"40"}
                />
                <PopularProduct
                  img={
                    "https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg"
                  }
                  categorie={"Snack & Munchies"}
                  title={"Haldiram's Sev Bhujia"}
                  rating={"2"}
                  response={"23"}
                  offerRate={"32"}
                  actulRate={"40"}
                />
              </>
      } />
    </div>
  );
};
