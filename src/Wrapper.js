import React from "react";
// import "./FeaturedCategories.css";

export default function Wrapper(props) {
  return (
    <div className="container mt-5">
      <h3>{props.title}</h3>
      <div className="container text-center mt-3">
      <div className="row ">{props.content}
      </div>
      </div>
    </div>
  );
}
