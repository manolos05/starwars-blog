import { Link } from "react-router-dom";
import React from "react";

export const Cards = ({ img, text, title, url }) => {
  return (
    <div className="card m-4 col-4 p-0" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className=" d-flex justify-content-between">
          <Link to={url} className="btn btn-primary ">
            More Info!
          </Link>
          <button type="button" className="btn btn-light">
            <i class="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
