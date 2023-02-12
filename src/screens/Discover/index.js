import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import MuseumCard from "../../components/MuseumCard";
import { museumsData } from "../../../museumData";
const Index = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return <MuseumCard props={item} />;
  };

  return (
    <>
      <FlatList data={museumsData} renderItem={renderItem} />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1C",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  body: {
    // paddingTop: 10,
    // flex:1
  },
  row: {
    margin: 1,
    name: {
      color: "white",
      fontSize: 16,
      fontWeight: "500",
      paddingHorizontal: 10,
      fontFamily: "System",
      fontStyle: "normal",
    },

    location: {
      color: "white",
      fontSize: 18,
      fontWeight: "600",
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontFamily: "System",
      fontStyle: "normal",
    },
    info: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // paddingVertical: 10,

      text: {
        color: "#909090",
      },
      icon: {
        // color: 'white',
        marginVertical: 5,
      },
    },
  },
  img: {
    width: 350,
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  animation: {
    shadowColor: "#red",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
});
