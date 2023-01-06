import React from 'react'

export const ProductInfo = () => {
  return (
    <div className='mt-5'>
<nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Product Details</button>
    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Information</button>
    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</button>
    <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Seller Info</button>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
  <div className="">
                <div className="mb-4 mt-3">
                  
                  <h4 className="mb-1">Nutrient Value & Benefits</h4>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna
                    bibendum
                    in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius
                    habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing
                    sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="mb-4">
                  <h5 className="mb-1">Storage Tips</h5>
                  <p className="mb-0">Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed
                    magnis eu
                    nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum
                    netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
               
                <div className="mb-4">
                  <h5 className="mb-1">Unit</h5>
                  <p className="mb-0">3 units</p>
                </div>
                <div className="mb-4">
                  <h5 className="mb-1">Seller</h5>
                  <p className="mb-0">DMart Pvt. LTD</p>
                </div>
                <div className="mb-4">
                  <h5 className="mb-1">Disclaimer</h5>
                  <p className="mb-0">Image shown is a representation and may slightly vary from the actual product. Every
                    effort
                    is made to maintain accuracy of all information displayed.</p>
                </div>
              </div>
  </div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
  <div className="row">
                  <div className="col-12 mt-3">
                    <h4 className="mb-4">Details</h4>
                  </div>
                  <div className="col-12 col-lg-6">
                    <table className="table table-striped">
                     
                      <tbody>
                        <tr>
                          <th>Weight</th>
                          <td>1000 Grams</td>
                        </tr>
                        <tr>
                          <th>Ingredient Type</th>
                          <td>Vegetarian</td>
                        </tr>
                        <tr>
                          <th>Brand</th>
                          <td>Dmart</td>
                        </tr>
                        <tr>
                          <th>Item Package Quantity</th>
                          <td>1</td>
                        </tr>
                        <tr>
                          <th>Form</th>
                          <td>Larry the Bird</td>
                        </tr>
                        <tr>
                          <th>Manufacturer</th>
                          <td>Dmart</td>
                        </tr>
                        <tr>
                          <th>Net Quantity</th>
                          <td>340.0 Gram</td>
                        </tr>
                        <tr>
                          <th>Product Dimensions</th>
                          <td>9.6 x 7.49 x 18.49 cm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-lg-6">
                    <table className="table table-striped">
              
                      <tbody>
                        <tr>
                          <th>ASIN</th>
                          <td>SB0025UJ75W</td>
                        </tr>
                        <tr>
                          <th>Best Sellers Rank</th>
                          <td>#2 in Fruits</td>
                        </tr>
                        <tr>
                          <th>Date First Available</th>
                          <td>30 April 2022</td>
                        </tr>
                        <tr>
                          <th>Item Weight</th>
                          <td>500g</td>
                        </tr>
                        <tr>
                          <th>Generic Name</th>
                          <td>Banana Robusta</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
  </div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
  <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
</div>
    </div>
  )
}
