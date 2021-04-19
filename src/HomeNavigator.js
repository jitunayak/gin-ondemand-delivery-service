// In App.js in a new project

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MenuList from "./Screens/MenuList";
import DATA from "./DATA";
import { Layout } from "./Constants/Layout";
import { Colours } from "./Constants/Colours";
import HomeScreen from "./Screens/HomeScreen";
import OrdersPage from "./Screens/OrdersPage";
import LocationPage from "./Screens/LocationPage";

const Stack = createStackNavigator();

function HomeNavigator() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Colours.accentcolor,
      background: Colours.white,
    },
  };

  return (
    <View style={styles.container}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={MenuList} />
          <Stack.Screen name="Order" component={OrdersPage} />
          <Stack.Screen name="Location" component={LocationPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    width: Layout.width,
    justifyContent: "center",
  },
});
export default HomeNavigator;
