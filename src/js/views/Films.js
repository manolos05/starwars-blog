import { Cards } from "../component/Cards";
import { useEffect, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Films = () => {
  const { store } = useContext(Context);

  return (
    <>
      <div className="row justify-content-center">
        {store.swFilms.length !== 0 ? (
          store.swFilms.result.map(({ properties, uid }) => (
            <Cards
              key={uid}
              img={`https://starwars-visualguide.com/assets/img/films/${uid}.jpg`}
              title={properties.title}
              url={`/Films/${uid}`}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
