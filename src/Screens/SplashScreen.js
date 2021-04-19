import React, { useState } from "react";
import { Button, Text, StyleSheet, View, Alert } from "react-native";
import LottieView from "lottie-react-native";
import { Layout } from "../Constants/Layout";
import { Colours } from "../Constants/Colours";
import { SafeAreaView } from "react-native-safe-area-context";
import lottie1 from "../../assets/33954-delivery-man-on-the-way.json";
import lottie2 from "../../assets/21653-delivery-guy-out-for-delivery.json";
import lottie3 from "../../assets/34883-delivery.json";
import lottie4 from "../../assets/1342-location.json";
import lottie5 from "../../assets/2672-location-signal-rev.json";
import HomeNavigator from "../HomeNavigator";

export default SplashScreen;

function SplashScreen() {
  const [loaded, setloaded] = useState(false);
  return (
    <View>
      {loaded ? (
        <HomeNavigator />
      ) : (
        <>
          <LottieView
            style={styles.animationContainer}
            source={lottie3}
            onAnimationFinish={() => setloaded(true)}
            autoPlay
            loop={false}
          ></LottieView>
          <Text style={{ fontSize: 40, textAlign: "center" }}>Gin Food</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: Colours.white,
    alignItems: "center",
    justifyContent: "center",
    width: Layout.width,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
