import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import productsDetails from "./Product.json";
import { useParams } from "react-router-dom";

function QuantityField() {
  const [count, setCount] = useState(0);

  function handleMinusClick() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handlePlusClick() {
    setCount(count + 1);
  }

  return (
    <div className="input-group input-spinner ">
      <button
        type="button"
        class="btn btn-light btn-quantity btn-sm me-1"
        value="-"
        data-field="quantity"
        onClick={handleMinusClick}
      >
        -
      </button>

      <input
        type="number"
        value={count}
        class="form-control form-quntity-field"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
        width={45}
      />

      <button
        type="button"
        class="btn btn-light btn-sm ms-1 btn-quantity"
        value="+"
        data-field="quantity"
        onClick={handlePlusClick}
      >
        +
      </button>
    </div>
  );
}

export const ProductDetails = () => {
  let { productId } = useParams();
  const productDetails = productsDetails.find(
    (data) => data.productId == productId
  );
  console.log(productDetails);
  return (
    <div className="container d-flex mt-4">
      <div className="container ps-lg-10 col-md-6 col-sm-12 col-12">
        <div className="main-tn">
          <img
            className=""
            style={{ width: "100%" }}
            src={productDetails.img}
            alt=""
            height={252}
          />
        </div>
        <div className="tn-row row mt-3">
          <div className=" tn-col col-3">
            <img
              style={{ width: "100%" }}
              src="https://freshcart.codescandy.com/assets/images/products/product-single-img-1.jpg"
              alt=""
            />
          </div>
          <div className=" tn-col col-3">
            <img
              style={{ width: "100%" }}
              src="https://freshcart.codescandy.com/assets/images/products/product-single-img-2.jpg"
              alt=""
            />
          </div>
          <div className=" tn-col col-3">
            <img
              style={{ width: "100%" }}
              src="https://freshcart.codescandy.com/assets/images/products/product-single-img-3.jpg"
              alt=""
            />
          </div>
          <div className=" tn-col col-3">
            <img
              style={{ width: "100%" }}
              src="https://freshcart.codescandy.com/assets/images/products/product-single-img-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container ps-lg-10 col-md-6 col-sm-12 col-12">
        <div>
          <Link to="/categorie" className="mb-4 d-block">
            <h6 className="text-green">{productDetails.categorie}</h6>
          </Link>

          <h1 className="mb-1 ">{productDetails.title}</h1>
        </div>
        <div className="text-warning star-rating">
          <small>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </small>
          <span className=" ms-2 text-green"> ({productDetails.response})</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
          <div className="price">
            <span className="text-dark fw-bold fs-4">Rs.{productDetails.offerRate}</span>
            <span className="text-decoration-line-through text-muted ms-1 fs-4">
              Rs.{productDetails.actulRate}
            </span>
            <span>
              <small className="fs-6 ms-1 text-danger">26% Off</small>
            </span>
          </div>
        </div>
        <hr className="my-6"></hr>
        <div className="mb-4">
          <button type="button" className="btn btn-outline-secondary">
            250g
          </button>
          <button type="button" className="btn btn-outline-secondary ms-1">
            500g
          </button>
          <button type="button" className="btn btn-outline-secondary ms-1">
            1kg
          </button>
        </div>
        <QuantityField />
        <div className="mt-4 ro justify-content-start align-items-center">
          <button type="button" className="btn btn-primary btn-lg">
            <i className="fa-sharp fa-solid fa-bag-shopping me-2"></i>Add to
            cart
          </button>
          <a className="btn btn-light ms-2 " href="#!">
            <i className="fa-sharp fa-regular fa-heart"></i>
          </a>
        </div>
        <hr className="my-6"></hr>
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>Product Code:</td>
              <td>FBB00255</td>
            </tr>
            <tr>
              <td>Availability:</td>
              <td>In Stock</td>
            </tr>
            <tr>
              <td>Type:</td>
              <td>Fruits</td>
            </tr>
            <tr>
              <td>Shipping:</td>
              <td>
                <small>
                  01 day shipping.
                  <span className="text-muted">( Free pickup today)</span>
                </small>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="btn-group dropup">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Share
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#!">
                Facebook
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Twitter
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#!">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
