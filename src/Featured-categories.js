import React from "react";
import { Link } from "react-router-dom";
import "./FeaturedCategories.css";
import Wrapper from "./Wrapper";
import categorieDetails from "./Categories.json";

function Categories(props) {
  return (
    
    <div className="col-md-4 col-lg-3 col-xxl-2 col-sm-6">
      <div className="product-card mb-3">
       <Link to="/categorie">
          <div className="card card-effect d-flex align-items-center">
            <img
              src={props.img}
              className="card-img-top img-wd-ht-120"
              alt="..."
            />
            <h6 className="text-truncate ">{props.title}</h6>
          </div>
          </Link>
        
      </div>
    </div>
   
  );
}
export default function FeaturedCategories() {
const categories = categorieDetails.map((details, id)=>{
return <Categories
            img={details.img}
            title={details.lable}
          />
}
)
  return (
    <Wrapper title={"Featured Categories"} content={
      <>
        {categories}
        </>}
        />
  
  );
}
