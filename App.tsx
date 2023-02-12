import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./src/navigation/Index";
import { BaseNetwork } from "./src/api/BaseNetwork";
import { LocationProvider } from "./src/store/context/LocationContext";

const App = () => {
  useEffect(() => {
    let network = new BaseNetwork();

    network.getAll("/places").then((res) => {
      console.log("RES", res);
    });
  }, []);

  return (
    <>
      <LocationProvider>
        <NavigationContainer>
          <Tab />
        </NavigationContainer>
      </LocationProvider>
    </>
  );
};

export default App;
