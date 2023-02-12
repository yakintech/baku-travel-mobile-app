import { useState, createContext, useEffect } from "react";
import { favoritesStorageHelper } from "../../helpers/FavoriteStorageHelper";

export const favoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  //GLOBAL STATE
  const [favorites, setfavorites] = useState([]);

  const values = {
    favorites,
    setfavorites,
  };

  useEffect(() => {
    favoritesStorageHelper.get().then((data) => {
      setfavorites(data);
    });
  }, []);

  return (
    <favoritesContext.Provider value={values}>
      {children}
    </favoritesContext.Provider>
  );
};
