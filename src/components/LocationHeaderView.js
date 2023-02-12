import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { locationContext } from "../store/context/LocationContext";
import Geolocation from "react-native-geolocation-service";
import { requestLocationPermission } from "../library/helpers/requestLocationPermission";
import Geocoder from "react-native-geocoding";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LocationHeaderView = () => {
  const { location, setLocation } = useContext(locationContext);
  const [address, setAdress] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=7f0a2e2fc39d10a9dac3b5a35d1080a2&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        setWeatherData(json);
      })
      .catch((err) => {
        console.log("ERror", err);
      });
  };

  useEffect(() => {
    if (location) {
      Geocoder.init("AIzaSyBOr8iEaw-JrUGTdOZ5KpuWEmltI0L4GgU");
      Geocoder.from(
        location && location.coords.latitude,
        location && location.coords.longitude
      ).then((json) => {
        var addressComponent =
          json.results[7].address_components[0].long_name +
          ", " +
          json.results[7].address_components[1].long_name;
        setAdress(addressComponent);
      });
      fetchWeather();
    }
  }, [location]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.address}>
        <FontAwesome
          name="location-arrow"
          size={19}
          color={"#018CF1"}
          style={styles.location}
        />
        <Text style={styles.text}>{address && address}</Text>
      </View>
    </View>
  );
};

export default LocationHeaderView;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: 29,
  },
  address: {
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 7,
    backgroundColor: "#34343466",
    alignContent: "space-between",
  },
  location: {
    marginRight: 8,
  },
  text: {
    color: "#F6F6F6",
    fontSize: 15,
  },
  weather: {
    backgroundColor: "#34343466",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 8,
    alignSelf: "flex-end",
  },
  weatherIcon: {
    width: 60,
    flexDirection: "row",
    height: 33,
  },
  textDegree: {
    color: "#F6F6F6",
    fontSize: 15,
  },
});
