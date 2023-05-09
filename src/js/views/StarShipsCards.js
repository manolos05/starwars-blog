import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";

const StarshipCard = () => {
  const [star, setStar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getInfoStarS = async () => {
        const res = await fetch(`https://www.swapi.tech/api/starships/${id}`);
        const data = await res.json();
        setStar(data.result);
      };
      getInfoStarS();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const { properties, uid, description } = star;

  return (
    <>
      {star.length !== 0 ? (
        <div className="card as p-0 mb-2 mt-4 d-" style={{ width: "50%" }}>
          <div className="row g-0 ">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{properties.model}</h5>
                <ul className="card-text" key={uid}>
                  <li>Manufacturer: {properties.manufacturer}</li>
                  <li>Length: {properties.length}</li>
                  <li>Max Speed: {properties.max_atmosphering_speed}</li>
                  <li>Crew: {properties.crew}</li>
                </ul>
                <p className="card-text">
                  <small className="text-body-secondary">{description}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="mt-4 d-flex  justify-content-center">
        <Link to="/Starship">
          <button className="btn btn-secondary bb">Back to Starships</button>
        </Link>
      </div>
    </>
  );
};

export default StarshipCard;
