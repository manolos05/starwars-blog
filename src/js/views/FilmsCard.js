import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";

export const FilmCards = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const getInfoFilm = async () => {
        const res = await fetch(`https://www.swapi.tech/api/films/${id}`);
        const data = await res.json();
        setFilm(data.result);
      };
      getInfoFilm();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const { properties, uid } = film;

  return (
    <>
      {film.length !== 0 ? (
        <div className="card as mt-4 mb-3" style={{ width: "500px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/films/${uid}.jpg`}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Planet: {properties.title}</h5>
                <ul key={uid}>
                  <li>Director: {properties.director}</li>
                  <li>Producer: {properties.producer}</li>
                  <li>Release Date: {properties.release_date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="mt-4 d-flex  justify-content-center">
        <Link to="/Films">
          <button className="btn btn-secondary bb">Back to Films</button>
        </Link>
      </div>
    </>
  );
};
