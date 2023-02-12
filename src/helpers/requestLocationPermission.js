import { PermissionsAndroid } from "react-native";

export async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Example App",
        message: "Example App access to your location ",
      }
    );

    return granted;
  } catch (err) {
    console.warn(err);
  }
}
