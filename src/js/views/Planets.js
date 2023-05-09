import { useContext, useEffect, useState } from "react";
import { Cards } from "../component/Cards";
import React from "react";
import { Context } from "../store/appContext";

const Planets = () => {
  const { store } = useContext(Context);
  const [planets, setPlanets] = useState([]);
  const [url, setUrl] = useState("https://www.swapi.tech/api/planets/");

  useEffect(() => {}, []);

  return (
    <>
      <div className="row justify-content-center">
        {store.swPlanets.length !== 0 ? (
          store.swPlanets.results.map(({ name, url, uid }) => (
            <Cards
              img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
              url={`/Planets/${uid}`}
              title={name}
              key={uid}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
      <div className="d-flex justify-content-center mb-4">
        <button
          className="btn btn-secondary bb"
          disabled={
            store.swPlanets.next ===
            "https://www.swapi.tech/api/planets?page=6&limit=10"
          }
          onClick={() => {
            setUrl(store.swPlanets.next);
          }}
        >
          Next
        </button>
        <button
          className="btn btn-secondary mx-2 bb"
          disabled={store.swPlanets.previous === null}
          onClick={() => {
            setUrl(store.swPlanets.previous);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
};

export default Planets;
