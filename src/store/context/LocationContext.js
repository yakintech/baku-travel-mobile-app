import { useState, createContext, useEffect } from "react";
import Geolocation from "react-native-geolocation-service";
import { Platform } from "react-native";
import { requestLocationPermission } from "../../helpers/requestLocationPermission";

export const locationContext = createContext(null);

export const LocationProvider = ({ children }) => {
  //GLOBAL STATE
  const [location, setLocation] = useState("");

  const values = {
    location,
    setLocation,
  };

  useEffect(() => {
    if (Platform.OS === "ios") {
      Geolocation.requestAuthorization("always").then((res) => {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);
          },
          (error) => {
            alert(error.message);
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      });
    } else {
      const getPermission = async () => {
        const isPermited = await requestLocationPermission();
        console.log(isPermited);
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);
          },
          (error) => {
            alert(error.message);
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      };

      getPermission();
    }
  }, []);
  return (
    <locationContext.Provider value={values}>
      {children}
    </locationContext.Provider>
  );
};
