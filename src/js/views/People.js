import { Cards } from "../component/Cards";
import { useState, useEffect, useContext } from "react";
import React from "react";
import { Context } from "../store/appContext";

export const People = () => {
  const { store } = useContext(Context);

  console.log(store.swPeople);

  return (
    <>
      <div className="row justify-content-center">
        {store.swPeople.length !== 0 ? (
          store.swPeople.results.map(({ name, url, uid }) => (
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

      {/* <div className="d-flex justify-content-center mb-4">
        <button
          className="btn btn-secondary bb"
          disabled={
            store.swPeople.next ===
            "https://www.swapi.tech/api/people?page=9&limit=10"
          }
          onClick={() => {
            setUrl(store.swPeople.next);
          }}
        >
          Next
        </button>
        <button
          className="btn btn-secondary mx-2 bb"
          disabled={store.swPeople.previous === null}
          onClick={() => {
            setUrl(store.swPeople.previous);
          }}
        >
          Previous
        </button>
      </div> */}
    </>
  );
};
