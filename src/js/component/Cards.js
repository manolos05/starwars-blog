import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Cards = ({ img, text, title, url, onClick }) => {
  const [active, setActive] = useState(false);
  const { actions } = useContext(Context);

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
          <button
            onClick={() => {
              active
                ? actions.deleteFavorite(title)
                : actions.getFavorite(title);
              setActive(!active);
            }}
            type="button"
            className="btn btn-light"
          >
            <i className={`bi ${active ? "bi-heart-fill" : "bi-heart"}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};
