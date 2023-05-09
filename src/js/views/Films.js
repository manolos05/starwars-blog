import { Cards } from "../component/Cards";
import { useEffect, useState } from "react";
import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Films = () => {
  const [film, setFilm] = useState([]);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log(actions.getInfoFilms());
    setFilm(actions.getInfoFilms);
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        {film.length !== 0 ? (
          film.result.map(({ properties, uid }) => (
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
