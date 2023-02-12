import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverStack from "./stack/DiscoverStack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontawesome from "react-native-vector-icons/FontAwesome5";
import RestaurantStack from "./stack/RestaurantStack";
import ShopStack from "./stack/ShopStack";
import HotelStack from "./stack/HotelStack";
import FavoriteStack from "./stack/FavoriteStack";

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#1C1C1C",
          },
          tabBarActiveTintColor: "#018CF1",
          tabBarInactiveBackgroundColor: "#f9f9f9",
        }}
      >
        <Tab.Screen
          name="Discover"
          component={DiscoverStack}
          options={({ route }) => ({
            tabBarLabel: "Discover",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="globe-model"
                color={color}
                size={26}
              />
            ),
          })}
        />

        <Tab.Screen
          name="Restaurants"
          component={RestaurantStack}
          options={{
            tabBarLabel: "Restaurants",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="grill" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Shops"
          component={ShopStack}
          options={{
            tabBarLabel: "Shops",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="shopping" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Hotels"
          component={HotelStack}
          options={{
            tabBarLabel: "Hotels",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={FavoriteStack}
          options={{
            tabBarLabel: "Favorites",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Index;
