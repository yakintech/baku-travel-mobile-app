import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./src/navigation/Index";
import { BaseNetwork } from "./src/api/BaseNetwork";
import { LocationProvider } from "./src/store/context/LocationContext";
import SplashScreen from "react-native-splash-screen";
import { FavoritesProvider } from "./src/store/context/FavoritesContext";
const App = () => {
  useEffect(() => {
    let network = new BaseNetwork();

    network.getAll("/places").then((res) => {
      console.log("RES", res);
    });
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <FavoritesProvider>
        <LocationProvider>
          <NavigationContainer>
            <Tab />
          </NavigationContainer>
        </LocationProvider>

      </FavoritesProvider>
    </>
  );
};

export default App;
