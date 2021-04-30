import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Colours } from "./Constants/Colours";
import HomeScreen from "./Screens/HomeScreen";
import OrdersPage from "./Screens/OrdersPage";
import OrderTrackerPage from "./Screens/OrderTrackerPage";
import SearchPage from "./Screens/SearchPage";
import OrdersHistory from "./Screens/OrdersHistory";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNavigation({ navigation }) {
  return (
    <Tab.Navigator
      lazy={false}
      backBehavior="none"
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "fastfood" : "fastfood";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Track") {
            iconName = focused ? "directions-bike" : "directions-bike";
          } else if (route.name === "Orders") {
            iconName = focused ? "clear-all" : "clear-all";
          }
          // You can return any component that you like here!
          return (
            <View style={{ padding: 0 }}>
              <Ionicons name={iconName} size={26} color={color} />
            </View>
          );
        },

        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              style={{
                color,
                fontSize: 12,
                paddingBottom: 4,
              }}
            >
              {route.name}
            </Text>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colours.accentcolor,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="Orders" component={OrdersHistory} />
      <Tab.Screen name="Track" component={OrderTrackerPage} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;
