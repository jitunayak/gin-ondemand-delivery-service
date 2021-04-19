import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Alert,
  CameraRoll,
  TextInput,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import MapView, {
  Marker,
  AnimatedRegion,
  Animated,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Layout } from "../Constants/Layout";
import { Colours } from "../Constants/Colours";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import lottie4 from "./../../assets/1342-location.json";

export default function LocationPage() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [longitude, setLongitude] = useState(85.8245);
  const [latitude, setlatitude] = useState(20.2961);
  const [fetched, setFetched] = useState(false);
  const [city, setCity] = useState("");
  const [localAddress, setLocalAddress] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      setFetched(true);
      setlatitude(latitude);
      setLongitude(longitude);

      //ChangeRegion();

      console.log(latitude, longitude);
      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
        .then((data) => data.json())
        .then((json) => {
          //console.log(json);
          setCity(json.city);
          setLocalAddress(json.locality);
        })
        .catch();
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });
  const ChangeRegion = (region) => {
    setFetched(true);
    setRegion({
      latitude: latitude,
      longitude: longitude,
    });
  };
  return (
    <View style={styles.container}>
      {fetched ? (
        <>
          <MapView
            maxZoomLevel={16}
            provider={PROVIDER_GOOGLE}
            style={styles.mapview}
            region={region}
            onRegionChangeComplete={(region) => ChangeRegion(region)}
          >
            <Marker
              draggable
              onDragEnd={(e) => {
                setlatitude(e.nativeEvent.coordinate.latitude);
                setLongitude(e.nativeEvent.coordinate.longitude);
              }}
              coordinate={{ latitude: latitude, longitude: longitude }}
              title="My location"
              description="address"
            />
          </MapView>
        </>
      ) : (
        <>
          <LottieView
            style={{ width: Layout.width - 40 }}
            source={lottie4}
            autoPlay
            loop
          />
          <Text>{errorMsg}</Text>
        </>
      )}

      <TextInput style={styles.inputbox} placeholder="Street" />
      <TextInput style={styles.inputbox} placeholder="Local area" />
      <TextInput
        style={styles.inputbox}
        value={localAddress}
        editable={false}
      />

      <Button
        title="Deliver here"
        loading={!fetched}
        buttonStyle={{ backgroundColor: Colours.accentcolor, height: 50 }}
        icon={
          <Icon
            name="location-arrow"
            size={15}
            style={{ paddingRight: 10 }}
            color="white"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    margin: 10,
  },
  mapview: {
    height: 200,
  },
  inputbox: {
    width: Layout.width - 30,
    padding: Layout.paddingSmall,
    backgroundColor: Colours.white,
    fontSize: 20,
    margin: 5,
    borderBottomWidth: 2,
    borderBottomColor: Colours.offwhite,
    color: Colours.darkforestgreen,
  },
});
