const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      swPeople: [],
      swFilms: [],
      swStarship: [],
      swPlanets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: async () => {
        try {
          console.log("loadSomeData");
          const res = await fetch("https://swapi.tech/api/films/");
          const data = await res.json();
          setStore({ swFilms: data });
        } catch (error) {
          console.log("error", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
