import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Favorites from "./components/favorites";
import { fetchFact } from "./api/api";

function App() {
  const lsFavoriteFacts = JSON.parse(localStorage.getItem("favoriteFacts"));
  const [currentFact, setCurrentFact] = useState(null);
  const [favoriteFacts, setFavoriteFacts] = useState(lsFavoriteFacts || []);

  const getFact = useCallback(async () => {
    fetchFact()
      .then((response) => {
        console.log("success", response.data);
        setCurrentFact({ ...response.data });
      })
      .catch((error) =>
        console.error("An error occurred on getting the data: ", error)
      );
  }, []);

  const toggleFavorite = () => {
    const alreadyExists = favoriteFacts.find((f) => f.id === currentFact.id);

    if (alreadyExists) {
      return;
    } else {
      const newFavorites = [...favoriteFacts, currentFact];
      setFavoriteFacts(newFavorites);
      localStorage.setItem("favoriteFacts", JSON.stringify(newFavorites));
    }
  };

  const removeFromFavorites = (factID) => {
    const newFavorites = favoriteFacts.filter((f) => f.id !== factID);
    setFavoriteFacts(newFavorites);
    localStorage.setItem("favoriteFacts", JSON.stringify(newFavorites));
  };

  useEffect(() => {
    getFact();
  }, [getFact]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="title">Chuck Norris Facts</h1>
          </div>
          <div className="col-6 factCol">
            <div className="card">
              <div className="card-body">
                <div></div>
              </div>
              <div>
                <button className="btn btn-lg" onClick={getFact}>
                  GET A FACT!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {currentFact && (
        <>
          <div>
            <h2>{currentFact.value}</h2>
          </div>
          <button onClick={toggleFavorite}>Add as favorite</button>
        </>
      )}
      {favoriteFacts.length > 0 && (
        <Favorites
          favorites={favoriteFacts}
          removeFromFavorites={removeFromFavorites}
        />
      )}
    </div>
  );
}

export default App;
