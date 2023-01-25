import React from "react";
import Products from "./Product.json";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
export const PopularProduct = (props) => {
  return (
    <div className="col-3 col-sm-4 col-lg-3">
      <div className="product-card mb-3">
        <Link to={`/product/${props.productId}`}>
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
              <Link to="/categorie">
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
};
export default function PopProducts() {
  var data = Products;
  let popularProducts = data.filter((product) => product.isPopular === true);

  const popProducts = popularProducts.map((product, id) => {
    return (
      <>
        <PopularProduct
          key={id}
          productId={product.productId}
          img={product.img}
          categorie={product.categorie}
          title={product.title}
          rating={product.rating}
          response={product.response}
          offerRate={product.offerRate}
          actulRate={product.actulRate}
        />
      </>
    );
  });

  return <Wrapper title={"Popular Products"} content={<>{popProducts}</>} />;
}
