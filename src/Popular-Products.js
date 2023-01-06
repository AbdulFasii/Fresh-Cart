import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
export const PopularProduct = (props) => {
  return (
    <div className="col-3 col-sm-4 col-lg-3">
      <div className="product-card mb-3">
       <Link to="/product">
          <div className="card card-effect p-3">
            <div className="position-relative d-flex align-self-center">
              <img
                src={props.img}
                className="popular-card-img-top "
                alt="..."
                height={187.33}
                width={187.33}
              />
              <span className="badge text-bg-danger position-absolute top-0 start-0">
                Sale
              </span>
            </div>

            <div>
              <Link to='/categorie'>
                <small>{props.categorie}</small>
              </Link>

              <h6 className="text-truncate bold fw-bold">{props.title}</h6>
            </div>
            <div className="text-warning star-rating">
              <small>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </small>
              <span className="text-muted small">
                {" "}
                {props.rating}({props.response})
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 w-100">
              <div className="price">
                <span className="text-dark fw-bold">Rs.{props.offerRate} </span>
                <span className="text-decoration-line-through text-muted">
                  {" "}
                  Rs.{props.actulRate}
                </span>
              </div>
              <div>
                <a href="#!" className="btn btn-primary btn-sm">
                  + Add
                </a>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default function PopProducts() {
  return (
    <Wrapper
      title={"Popular Products"}
      content={
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
      }
    />
  );
}
