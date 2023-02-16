import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoverListScreen from "../../screens/Discover";
import LocationHeaderView from "../../components/LocationHeaderView";
import Detail from "../../screens/Discover/Detail";

const DiscoverStack = () => {
  const DiscoverStack = createNativeStackNavigator();

  return (
    <>
      <DiscoverStack.Navigator>
        <DiscoverStack.Screen
          name="DiscoverList"
          component={DiscoverListScreen}
          options={{
            headerTitle: () => <LocationHeaderView />,
            headerStyle: {
              backgroundColor: "#1c1c1c",
            },
            contentStyle: {
              backgroundColor: "#1c1c1c"
            }
          }}
        />
        <DiscoverStack.Screen name="Discoverdetail" component={Detail} />
      </DiscoverStack.Navigator>
    </>
  );
};

export default DiscoverStack;

const styles = StyleSheet.create({});
