import React from "react";
import { Link } from "react-router-dom";
import "./BestSells.css";
import Wrapper from "./Wrapper";

function BestSellProduct(props) {
  return (
    <div className="col-12 col-lg-6 col-xl-3">
      <div className="product-card mb-3">
        <Link to="/product">
          <div className="card card-effect p-3">
            <div className="position-relative d-flex align-self-center">
              <img
                src={props.img}
                className="card-img-top "
                alt="..."
                height={220}
                width={220}
              />
            </div>

            <div>
              <Link to='/categorie' className="text-decoration-none text-muted">
                <small>{props.categorie}</small>
              </Link>

              <h6 className="text-truncate bold fw-bold">{props.title}</h6>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
              <div className="price">
                <span className="text-dark fw-bold">Rs.{props.offerRate} </span>
                <span className="text-decoration-line-through text-muted">
                  {" "}
                  Rs.{props.actulRate}
                </span>
              </div>
              <div className="text-warning star-rating">
                <small>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </small>
                <span className="text-muted small"> {props.rating}</span>
              </div>
            </div>
            <div>
              <a href="#!" className="btn btn-primary btn-lg w-100 mt-2 ">
                + Add to cart
              </a>
            </div>
            <div className="d-flex justify-content-start text-center mt-3">
              <div
                className="deals-countdown w-100"
                data-countdown="2022/10/10 00:00:00"
              >
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">00</span>
                  <span className="countdown-period text-muted"> days </span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">00</span>
                  <span className="countdown-period text-muted"> hours </span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">00</span>
                  <span className="countdown-period text-muted"> mins </span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount hover-up">00</span>
                  <span className="countdown-period text-muted"> sec </span>
                </span>
              </div>
            </div>
          </div>
          </Link>
      </div>
    </div>
  );
}
export default function BestSellProducts() {
  return (
    
   <Wrapper title={"Daily Best Sells"} content={
        <>
          <BestSellProduct
            img={
              "https://freshcart.codescandy.com/assets/images/products/product-img-11.jpg"
            }
            categorie={"Tea, Coffee & Drinks"}
            title={"Roast Ground Coffee"}
            rating={"5"}
            response={"23"}
            offerRate={"250"}
            actulRate={"300"}
          />
          <BestSellProduct
            img={
              "https://freshcart.codescandy.com/assets/images/products/product-img-13.jpg"
            }
            categorie={"Fruits & Vegetables"}
            title={"Golden Pineapple"}
            rating={"4"}
            response={"64"}
            offerRate={"40"}
            actulRate={"50"}
          />
           <BestSellProduct
            img={
              "https://freshcart.codescandy.com/assets/images/products/product-img-11.jpg"
            }
            categorie={"Tea, Coffee & Drinks"}
            title={"Roast Ground Coffee"}
            rating={"5"}
            response={"23"}
            offerRate={"250"}
            actulRate={"300"}
          />
          <BestSellProduct
            img={
              "https://freshcart.codescandy.com/assets/images/products/product-img-13.jpg"
            }
            categorie={"Fruits & Vegetables"}
            title={"Golden Pineapple"}
            rating={"4"}
            response={"64"}
            offerRate={"40"}
            actulRate={"50"}
          />
        </>}
        />
  );
}
