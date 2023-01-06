import React from "react";
import { ProductDetails } from "./ProductDetails";
import { ProductInfo } from "./ProductInfo";
import { RelatedItems } from "./RelatedItems";
import Footer from "./Footer";
export const ProductPage = () => {
  return (
    <>
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#!">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Library</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Data
            </li>
          </ol>
        </nav>
      </div>
      <div className="container">
        <ProductDetails />
        <ProductInfo />
        <RelatedItems />
        </div>
        
          <Footer />
      
      
    </>
  );
};
