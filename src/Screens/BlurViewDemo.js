import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

function BlurViewDemo() {
  return (
    <View style={{ height: 200, width: 200 }}>
      <Text>Hello! I am bluring contents underneath</Text>
      <View
        style={{ height: 100, width: 100, backgroundColor: "yellow" }}
      ></View>
      <BlurView
        style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
        blurType="dark"
        blurAmount={100}
        reducedTransparencyFallbackColor="white"
      ></BlurView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 200,
    width: 200,
  },
  roundImage: {
    height: 200,
    width: 200,
  },
  roundImageBackground: {
    backgroundColor: "white",
    height: 300,
    width: 300,
    borderRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BlurViewDemo;
