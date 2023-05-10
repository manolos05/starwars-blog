const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      swPeople: [],
      swFilms: [],
      swStarship: [],
      swPlanets: [],
      swFavorites: [],
    },
    actions: {
      getInfoFilms: async () => {
        try {
          const res = await fetch("https://swapi.tech/api/films/");
          const data = await res.json();
          setStore({ swFilms: data });
        } catch (error) {
          console.log("error", error);
        }
      },
      getInfoPeople: async () => {
        try {
          const res = await fetch("https://swapi.tech/api/people/");
          const data = await res.json();
          setStore({ swPeople: data });
        } catch (error) {
          console.log("error", error);
        }
      },
      getInfoStarship: async () => {
        try {
          const res = await fetch("https://swapi.tech/api/starships/");
          const data = await res.json();
          setStore({ swStarship: data });
        } catch (error) {
          console.log("error", error);
        }
      },
      getInfoPlanet: async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          setStore({ swPlanets: data });
        } catch (error) {
          console.log("error", error);
        }
      },
      getFavorite: (fav) => {
        const store = getStore();
        if (!store.swFavorites.includes(fav)) {
          setStore({ swFavorites: [...store.swFavorites, fav] });
        }
      },
      deleteFavorite: (fav) => {
        const store = getStore();
        const newFavorite = store.swFavorites.filter((f) => fav !== f);
        setStore({ swFavorites: newFavorite });
      },
    },
  };
};

export default getState;
