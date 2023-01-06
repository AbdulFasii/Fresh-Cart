import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function navbar() {
  return (
    <>
    <div className="navbar navbar-expand-lg">
      <div className="container pb-2 ">
        
    
          <div className="d-flex">
          <a className="navbar-brand " href="#!">
          <img
            src="https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg"
            alt="eCommerce HTML Template" />
        </a>
          <form action="#!" className="d-none d-lg-block " >
            <div className="form-group has-search d-flex">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="Search" />
              <button type="button" className="btn btn-location text-muted">
            <i className="fa-solid fa-location-dot"></i>  Location
           </button>
            </div>
          </form>
          </div>
     
      
        <div className=" text-end">
          <div className="d-flex align-items-center ">
            <a type="button" className="btn btn-lg text-muted d-none d-lg-block">
              <i className="fa-sharp fa-solid fa-heart"></i>
            </a>
            <a type="button" className="btn btn-lg text-muted">
              <i className="fa-solid fa-user"></i>
            </a>
            <a type="button" className="btn btn-lg text-muted">
              <i className="fa-sharp fa-solid fa-bag-shopping"></i>
            </a>
            <button
            className="navbar-toggler d-block d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
        </div>
      </div>
    </div>
  <div className="border-bottom pb-3 d-none d-lg-block ">
    <nav className="navbar navbar-expand-lg navbar-light navbar-default pt-0 pb-0">
    <div className="container px-0 px-md-3 d-flex justify-content-start">
      <div className="dropdown me-3 d-none d-lg-block">
        <button className="btn btn-primary px-6 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span className="me-1">
          <i className="fa-solid fa-boxes-stacked"></i></span> All Departments
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#!">Dairy, Bread & Eggs</a></li>
          <li><a className="dropdown-item" href="#!">Snacks & Munchies</a></li>
          <li><a className="dropdown-item" href="#!">Fruits & Vegetables</a></li>
          <li><a className="dropdown-item" href="#!">Cold Drinks & Juices</a></li>
          <li><a className="dropdown-item" href="#!">Breakfast & Instant Food</a></li>
          <li><a className="dropdown-item" href="#!">Bakery & Biscuits</a></li>

          <li><a className="dropdown-item" href="#!">Chicken, Meat & Fish</a></li>
        </ul>
      </div>

        <div className="d-none d-lg-block">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Home
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="./index.html">Home 1</a></li>
                <li><a className="dropdown-item" href="#!">Home 2</a></li>
                <li><a className="dropdown-item" href="#!">Home 3</a></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Shop Grid - Filter</a></li>
                <li><a className="dropdown-item" href="#!">Shop Grid - 3 column</a>
                </li>
                <li><a className="dropdown-item" href="#!">Shop List - Filter</a></li>
                <li><a className="dropdown-item" href="#!">Shop - Filter</a></li>
                <li><a className="dropdown-item" href="#!">Shop Wide</a></li>
                <li><a className="dropdown-item" href="#!">Shop Single</a></li>
                <li><a className="dropdown-item" href="#!">Shop Wishlist</a></li>
                <li><a className="dropdown-item" href="#!">Shop Cart</a></li>
                <li><a className="dropdown-item" href="#!">Shop Checkout</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Stores
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Store List</a></li>
                <li><a className="dropdown-item" href="#!">Store Grid</a></li>
                <li><a className="dropdown-item" href="#!">Store Single</a></li>

              </ul>
            </li>

            <li className="nav-item dropdown dropdown-fullwidth">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mega menu
              </a>
              <div className=" dropdown-menu pb-0">

                <div className="row p-2 p-lg-4">
                  <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                    <h6 className="text-primary ps-3">Dairy, Bread & Eggs</h6>
                    <a className="dropdown-item" href="#!">Butter</a>
                    <a className="dropdown-item" href="#!">Milk Drinks</a>
                    <a className="dropdown-item" href="#!">Curd & Yogurt</a>
                    <a className="dropdown-item" href="#!">Eggs</a>
                    <a className="dropdown-item" href="#!">Buns & Bakery</a>
                    <a className="dropdown-item" href="#!">Cheese</a>
                    <a className="dropdown-item" href="#!">Condensed Milk</a>
                    <a className="dropdown-item" href="#!">Dairy Products</a>

                  </div>
                  <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                    <h6 className="text-primary ps-3">Breakfast & Instant Food</h6>
                    <a className="dropdown-item" href="#!">Breakfast Cereal</a>
                    <a className="dropdown-item" href="#!"> Noodles, Pasta &Soup</a>
                    <a className="dropdown-item" href="#!">Frozen Veg Snacks</a>
                    <a className="dropdown-item" href="#!"> Frozen Non-Veg Snacks</a>
                    <a className="dropdown-item" href="#!"> Vermicelli</a>
                    <a className="dropdown-item" href="#!"> Instant Mixes</a>
                    <a className="dropdown-item" href="#!"> Batter</a>
                    <a className="dropdown-item" href="#!"> Fruit and Juices</a>

                  </div>
                  <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                    <h6 className="text-primary ps-3">Cold Drinks & Juices</h6>
                    <a className="dropdown-item" href="#!">Soft Drinks</a>
                    <a className="dropdown-item" href="#!">Fruit Juices</a>
                    <a className="dropdown-item" href="#!">Coldpress</a>
                    <a className="dropdown-item" href="#!">Water & Ice Cubes</a>
                    <a className="dropdown-item" href="#!">Soda & Mixers</a>
                    <a className="dropdown-item" href="#!">Health Drinks</a>
                    <a className="dropdown-item" href="#!">Herbal Drinks</a>
                    <a className="dropdown-item" href="#!">Milk Drinks</a>


                  </div>
                  <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                    <div className="card border-0">
                      {/* banner img */}
                      <div className="position-absolute ps-6 mt-8">
                        <h5 className=" mb-0 ">Dont miss this offer today.</h5>
                        <a href="#!" className="btn btn-primary btn-sm mt-3">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Blog</a></li>
                <li><a className="dropdown-item" href="#!">Blog Single</a></li>
                <li><a className="dropdown-item" href="#!">Blog Category</a></li>
                <li><a className="dropdown-item" href="#!">About us</a></li>
                <li><a className="dropdown-item" href="#!">404 Error</a></li>
                <li><a className="dropdown-item" href="#!">Contact</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Sign in</a></li>
                <li><a className="dropdown-item" href="#!">Signup</a></li>
                <li><a className="dropdown-item" href="#!">Forgot Password</a></li>
                <li className="dropdown-submenu dropend">
                  <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#!">
                    My Account
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#!">Orders</a></li>
                    <li><a className="dropdown-item" href="#!">Settings</a></li>
                    <li><a className="dropdown-item" href="#!">Address</a></li>
                    <li><a className="dropdown-item" href="#!">Payment Method</a>
                    </li>
                    <li><a className="dropdown-item" href="#!">Notification</a></li>


                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#!">
                Docs
              </a>

            </li>
          </ul>
        </div>
</div>
  </nav>
      </div>
      </>
  );
}
