import React from "react";

export default function icon(props) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="mb-5 mb-xl-0">
        <div className="mb-3">
          <i className={props.icon}></i>
        </div>
        <h3 className="h5 mb-3">{props.title}</h3>
        <p>{props.bodyText}</p>
      </div>
    </div>
  );
  }
 