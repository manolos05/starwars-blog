import { Cards } from "../component/Cards";
import { useEffect, useState } from "react";
import React from "react";

export const Starship = () => {
  const [star, setStarS] = useState([]);
  const [url, setUrl] = useState("https://www.swapi.tech/api/starships/");

  useEffect(() => {
    try {
      const getInfoStarship = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setStarS(data);
      };
      getInfoStarship();
    } catch (error) {
      console.log("error", error);
    }
  }, [url]);

  return (
    <>
      <div className="row justify-content-center">
        {star.length !== 0 ? (
          star.results.map(({ name, url, uid }) => (
            <Cards
              img={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
              title={name}
              url={`/Starship/${uid}`}
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
            star.next === "https://www.swapi.tech/api/people?page=9&limit=10"
          }
          onClick={() => {
            setUrl(star.next);
          }}
        >
          Next
        </button>
        <button
          className="btn btn-secondary mx-2 bb"
          disabled={star.previous === null}
          onClick={() => {
            setUrl(star.previous);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
};
