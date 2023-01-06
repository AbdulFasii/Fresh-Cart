import React from "react";
import Wrapper from "./Wrapper";

function Feature(props) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="mb-5 mb-xl-0">
        <div className="mb-3">
          <i className={props.icon}></i>
        </div>
        <h3 className="h5 mb-3 ">{props.title}</h3>
        <p className="text-muted">{props.bodyText}</p>
      </div>
    </div>
  );
}
export default function Features() {
  return (
    <Wrapper  content={
      <>
   
      <Feature
        icon={"fa-solid fa-clock fa-2x"}
        title={"10 minute grocery now"}
        bodyText={
          "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you."
        }
      />
      <Feature
        icon={"fa-solid fa-gift fa-2x"}
        title={"Best Prices & Offers"}
        bodyText={
          "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers."
        }
      />
      <Feature
        icon={"fa-solid fa-cubes fa-2x"}
        title={"Wide Assortment"}
        bodyText={
          "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & othercategories."
        }
      />
      <Feature
        icon={"fa-solid fa-arrows-rotate fa-2x"}
        title={"Easy Returns"}
        bodyText={
          "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy."
        }
      />
     </>}
    />
 
  );
}
