import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Layout = {
  height: windowHeight,
  width: windowWidth,
  paddingSmall: 10,
  paddingMedium: 20,
  paddingLarge: 40,
  marginSmall: 10,
  marginMedium: 20,
};
