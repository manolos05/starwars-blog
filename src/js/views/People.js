import { Cards } from "../component/Cards";
import { useState, useEffect } from "react";
import React from "react";

export const People = () => {
  const [people, setPeople] = useState([]);
  const [url, setUrl] = useState("https://www.swapi.tech/api/people/");

  useEffect(() => {
    try {
      const getInfoPeople = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPeople(data);
      };
      getInfoPeople();
    } catch (error) {
      console.log("error", error);
    }
  }, [url]);

  return (
    <>
      <div className="row justify-content-center">
        {people.length !== 0 ? (
          people.results.map(({ name, url, uid }) => (
            <Cards
              img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
              key={uid}
              title={name}
              url={`/People/${uid}`}
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
            people.next === "https://www.swapi.tech/api/people?page=9&limit=10"
          }
          onClick={() => {
            setUrl(people.next);
          }}
        >
          Next
        </button>
        <button
          className="btn btn-secondary mx-2 bb"
          disabled={people.previous === null}
          onClick={() => {
            setUrl(people.previous);
          }}
        >
          Previous
        </button>
      </div>
    </>
  );
};
