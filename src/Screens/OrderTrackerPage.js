import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import { Colours } from "../Constants/Colours";
import { Icon, Avatar } from "react-native-elements";
import userdemo from "./../../assets/userdemo.jpg";
import MapView, {
  Marker,
  AnimatedRegion,
  Animated,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { Layout } from "../Constants/Layout";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";

function OrderTrackerPage() {
  const deliveryGuy = {
    name: "Elon Musk",
    contact: "7377056991",
    rating: "*****",
    estimations: "20",
  };

  const DeliveryExecutive = () => {
    const uri =
      "https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png";

    return (
      <Animatable.View animation="fadeInUpBig" style={styles.container}>
        <View style={styles.horizontalContainer}>
          <Avatar
            title="user"
            size={50}
            rounded
            source={userdemo}
            onPress={() => Alert.alert("upcoming..")}
            containerStyle={{ marginTop: 10, marginRight: 10 }}
          />
          <View>
            <Text style={styles.name}>{deliveryGuy.name}</Text>
            <Text style={{ color: Colours.offwhite }}>Delivery partner</Text>
            <Text style={styles.rating}>Rating : {deliveryGuy.rating}</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.h2}>Estimated delivery</Text>
            <Animatable.Text
              animation="lightSpeedIn"
              iterationCount={2}
              style={styles.h1}
            >
              in {deliveryGuy.estimations} minutes
            </Animatable.Text>
          </View>
          <TouchableHighlight
            onPress={() => {
              Alert.alert("called");
            }}
            style={styles.button}
          >
            <Text style={styles.btn_text}>Call</Text>
          </TouchableHighlight>
        </View>
      </Animatable.View>
    );
  };

  const MapTracker = () => {
    return (
      <View>
        <MapView
          maxZoomLevel={16}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          // provider={PROVIDER_GOOGLE}
          style={styles.mapview}
          minZoomLevel={15}
        />

        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            margin: 60,
            padding: 15,
            backgroundColor: Colours.blacklight,
            borderRadius: 30,
            opacity: 0.7,
          }}
        >
          <Text
            style={{
              color: Colours.white,
              fontWeight: "600",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            on the way...
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <MapTracker />
      <DeliveryExecutive />
    </View>
  );
}

const styles = StyleSheet.create({
  mapview: {
    height: Layout.height - 40,
  },
  container: {
    height: 200,
    backgroundColor: Colours.blacklight,
    justifyContent: "space-between",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: Colours.accentcolor,
    padding: 15,
    width: 100,
    borderRadius: 30,
  },
  btn_text: {
    fontWeight: "600",
    color: Colours.white,
    textAlign: "center",
    fontSize: 18,
  },
  subcontainer: {
    margin: 6,
    padding: 16,
    backgroundColor: Colours.white,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",

    padding: 10,
  },
  name: {
    fontSize: 20,
    color: Colours.white,
    fontWeight: "600",
  },
  rating: {
    color: Colours.gold,
    marginTop: 2,
  },
  h2: {
    fontSize: 18,
    color: Colours.darkaccentcolor,
  },
  h1: {
    fontSize: 22,
    color: Colours.accentcolor,
    fontWeight: "bold",
  },
});
export default OrderTrackerPage;
