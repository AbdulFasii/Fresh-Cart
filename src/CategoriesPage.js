import React from "react";
import Footer from "./Footer";

const Checkbox = (props) => {
  return (
    <div className="form-check mb-2">
      <input
        className="form-check-input"
        type="checkbox"
        value={props.value}
        id={props.id}
        onChange= {props.onChange}
      />
      <label className="form-check-label" for="eGrocery">
        {props.label}
      </label>
    </div>
  );
};

export const CategoriesPage = () => {
  return (
    <>
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#!">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Snacks & Munchies
            </li>
          </ol>
        </nav>
      </div>

      <div className="container d-flex ">
        <div className="col-lg-3 d-lg-block d-none me-3">
          <h5 className="mb-3">Categories</h5>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Dairy, Bread & Eggs
              <span className="badge bg-primary rounded-pill"></span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Snacks & Munchies
              <span className="badge bg-primary rounded-pill"></span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Fruits & Vegetables
              <span className="badge bg-primary rounded-pill"></span>
            </li>
          </ul>

          <div className="mb-8">
            <h5 className="mb-1 mt-3">Stores</h5>
            <div className="my-2">
              <input
                type="search"
                className="form-control"
                placeholder="Search by store"
              />
            </div>
            <Checkbox id={"eGrocery"} label={"E-Grocery"} value={""} onChange={()=>{}}/>
            <Checkbox id={"DealShare"} label={"DealShare"} value={""} onChange={()=>{}}/>
            <Checkbox id={"Dmart"} label={"Dmart"} value={""} onChange={()=>{}}/>
            <Checkbox id={"Blinkit"} label={"Blinit"} value={""} onChange={()=>{}}/>
            <Checkbox id={"BigBasket"} label={"BigBasket"} value={""} onChange={()=>{}}/>
            <Checkbox id={"StoreFront"} label={"StoreFront"} value={""} onChange={()=>{}} />
            <Checkbox id={"Spencers"} label={"Spencers"} value={""} onChange={()=>{}}/>
            <Checkbox id={"onlineGrocery"} label={"Online Grocery"} value={""} onChange={()=>{}} />
          </div>
          <div className="mb-8">
            <h5 className="mb-2 mt-3">Rating</h5>
            <div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="ratingFive"
                />
                <label
                  className="form-check-label text-warning"
                  for="ratingFive"
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="ratingFour"
                />
                <label
                  className="form-check-label text-warning"
                  for="ratingFour"
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-regular fa-star"></i>
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="ratingThree"
                />
                <label
                  className="form-check-label text-warning"
                  for="ratingThree"
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-solid fa-star "></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="ratingTwo"
                />
                <label
                  className="form-check-label text-warning"
                  for="ratingTwo"
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </label>
              </div>

              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="ratingOne"
                />
                <label
                  className="form-check-label text-warning"
                  for="ratingOne"
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-9 col-12 m">
          <div
            className="card container "
            style={{ backgroundColor: "#dfe2e1" }}
          >
            <div className="card-body">
              <h2 className="mb-0 fs-1 p-9">Snacks & Munchies</h2>
            </div>
          </div>
          <div className="container mt-3">
            <div className="d-lg-flex justify-content-between align-items-center">
              <div className="mb-3 mb-lg-0">
                <p className="mb-0">
                  {" "}
                  <span className="text-dark">30 </span> Products found{" "}
                </p>
              </div>

              <div className="d-md-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="">
                    <a href="#!" className="me-3">
                      <i className="fa-solid fa-list-ul"></i>
                    </a>
                    <a href="#!" className="me-3">
                      <i className="fa-solid fa-grid-2"></i>
                    </a>
                    <a href="#!" className="me-3">
                      <i className="fa-solid fa-grid"></i>
                    </a>
                  </div>
                  <div className="ms-2 d-lg-none">
                    <a
                      className="btn btn-outline-gray-400 text-muted"
                      role="button"
                    >
                      <i className="fa-solid fa-filter"></i> Filters
                    </a>
                  </div>
                </div>

                <div className="d-flex mt-2 mt-lg-0">
                  <div className="me-2 flex-grow-1">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Show: 50</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected="">Sort by: Featured</option>
                      <option value="Low to High">Price: Low to High</option>
                      <option value="High to Low"> Price: High to Low</option>
                      <option value="Release Date"> Release Date</option>
                      <option value="Avg. Rating"> Avg. Rating</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item me-2">
                    <a className="page-link " href="#!">
                      <i className="fa-solid fa-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a className="page-link" href="#!">
                      1
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a className="page-link" href="#!">
                      2
                    </a>
                  </li>
                  <li className="page-item me-2">
                    <a className="page-link" href="#!">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#!">
                      <i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
