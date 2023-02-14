import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { museumsData } from "../../../museumData";
import MapView, { Marker } from "react-native-maps";
import Carousel from "react-native-snap-carousel";
import Share from "react-native-share";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MyCarousel } from "../../../src/components/Carousel";

const DetailScreen = ({ route }) => {
  let { id } = route.params;
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [icon, seticon] = useState("bookmark");
  let museum = museumsData.find((q) => q.id == id);

  const onShare = () => {
    Share.open({
      message: "Hello Share",
      title: "Hello Title",
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1C1C1C" }}>
      {/* <MapView
        userInterfaceStyle={"dark"}
        showsUserLocation
        showsMyLocationButton
        style={{
          height: (windowHeight * 25) / 100,
          marginBottom: -30,
        }}
        initialRegion={{
          latitude: museum.latitude,
          longitude: museum.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={{
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        }}
      >
        <Marker
          coordinate={{
            latitude: museum.latitude,
            longitude: museum.longitude,
          }}
          title={museum.name}
          description={museum.description.substring(0, 50)}
        ></Marker>
      </MapView> */}
      <MyCarousel />
      <View style={style.styleBackgroundWithoutMap}>
        <View style={style.styleDistanceAndCondition}>
          <Text style={style.styleDistance}>2km *</Text>
          <Text style={style.styleCondition}> Open Soon</Text>
        </View>
        <ScrollView
          style={{ height: windowHeight * 0.22, paddingHorizontal: 10 }}
        >
          <Text style={style.styleScrollName}>{museum.name}</Text>
          <Text style={style.styleScrollDescription}>{museum.description}</Text>
        </ScrollView>
        <View style={style.styleViewShareIcon}>
          <View
            style={{
              backgroundColor: "#018CF1",
              borderRadius: 10,
              height: windowHeight * 0.05,
              flex: 6,
            }}
          >
            <TouchableOpacity
              style={style.styleTouchableOpacityShare}
              onPress={() => onShare()}
            >
              <Text style={style.styleTextShare}>Share</Text>
            </TouchableOpacity>
          </View>
          <Pressable
            style={style.favoritIcon}
            onPress={() =>
              seticon(icon == "bookmark" ? "bookmark-outline" : "bookmark")
            }
          >
            <MaterialCommunityIcons name={icon} size={32} color={"white"} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  styleCarouselView: {
    justifyContent: "center",
    alignItems: "center",
  },
  styleCarouselImage: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  styleMapView: {},
  styleBackgroundWithoutMap: {
    backgroundColor: "#1c1c1c",
  },
  styleCarousel: {},
  styleDistanceAndCondition: {
    flexDirection: "row",
    margin: 5,
  },
  styleDistance: {
    color: "#909090",
    fontSize: 16,
  },
  styleCondition: {
    color: "#E0783E",
    fontSize: 16,
  },
  styleScrollNameDescription: {},
  styleScrollName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  styleScrollDescription: {
    fontSize: 16,
    textAlign: "justify",
    color: "white",
  },
  styleViewShareIcon: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  styleViewShare: {},
  styleTouchableOpacityShare: {
    flex: 0.95,
  },
  styleTextShare: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    padding: 3,
  },
  favoritIcon: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
  },
});

export default DetailScreen;
