import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import ItemList from "./src/Components/ItemList";
import ItemListAnime from "./src/Components/ItemListAnime";
import PrimaryList from "./src/Components/PrimaryList";
import topbanner from "./assets/topbanner.jpeg";
import { Layout } from "./src/Constants/Layout";
import { Colours } from "./src/Constants/Colours";
import ItemListLongCards from "./src/Components/ItemListLongCards";
import MenuList from "./src/Screens/MenuList";
import DATA from "./src/DATA";
import HomeNavigator from "./src/HomeNavigator";
import SplashScreen from "./src/Screens/SplashScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <SplashScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
});
