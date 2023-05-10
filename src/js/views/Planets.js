import { useContext } from "react";
import { Cards } from "../component/Cards";
import React from "react";
import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const { swPlanets } = store;

  return (
    <>
      <div className="row justify-content-center">
        {swPlanets.length !== 0 ? (
          swPlanets.results.map(({ name, url, uid }) => (
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
            swPlanets.next ===
            "https://www.swapi.tech/api/planets?page=6&limit=10"
          }
          onClick={() => {
            actions.getInfoPlanet(swPlanets.next);
          }}
        >
          Next
        </button>
        <button
          className="btn btn-secondary mx-2 bb"
          disabled={swPlanets.previous === null}
          onClick={() => {
            actions.getInfoPlanet(swPlanets.previous);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
};

export default Planets;
