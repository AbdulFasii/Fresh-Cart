import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCategories.css";
import Wrapper from "./Wrapper";

function Categories(props) {
  return (
    
    <div className="col-md-4 col-lg-3 col-xxl-2 col-sm-6">
      <div className="product-card mb-3">
       <Link to="/categorie">
          <div className="card card-effect d-flex align-items-center">
            <img
              src={props.img}
              className="card-img-top"
              alt="..."
              height={120}
              width={120}
            />
            <h6 className="text-truncate ">{props.title}</h6>
          </div>
          </Link>
        
      </div>
    </div>
   
  );
}
export default function FeaturedCategories() {
  return (
    <Wrapper title={"Featured Categories"} content={
      <>
        
          <Categories
            img="https://freshcart.codescandy.com/assets/images/category/category-dairy-bread-eggs.jpg"
            title={"Diary, Bread & Eggs"}
          />
          <Categories
            img="https://freshcart.codescandy.com/assets/images/category/category-snack-munchies.jpg"
            title={"Snacks & Munchies"}
          />
          <Categories
            img="https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg"
            title={"Bakery & Biscuits"}
          />
          <Categories
            img="https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg"
            title={"Instant Foods"}
          />

          <Categories
            img="https://freshcart.codescandy.com/assets/images/category/category-baby-care.jpg"
            title={"Baby Care"}
          />
          <Categories
            img="https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg"
            title={"Atta,Rice & Dal"}
          />
        </>}
        />
  
  );
}
