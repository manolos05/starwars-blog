import { useEffect, useState } from "react";
import { Cards } from "../component/Cards";
import React from "react";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [url, setUrl] = useState("https://www.swapi.tech/api/planets/");

  useEffect(() => {
    try {
      const getInfoPlanets = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPlanets(data);
      };
      getInfoPlanets();
    } catch (error) {
      console.log("error", error);
    }
  }, [url]);

  return (
    <>
      <div className="row justify-content-center">
        {planets.length !== 0 ? (
          planets.results.map(({ name, url, uid }) => (
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
            planets.next ===
            "https://www.swapi.tech/api/planets?page=6&limit=10"
          }
          onClick={() => {
            setUrl(planets.next);
          }}
        >
          Next
        </button>
        <button
          className="btn btn-secondary mx-2 bb"
          disabled={planets.previous === null}
          onClick={() => {
            setUrl(planets.previous);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
};

export default Planets;
