import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Colours } from "../Constants/Colours";
import DATA from "../DATA";
import ItemListAnime from "../Components/ItemListAnime";
import { Layout } from "../Constants/Layout";

const ShowAlrt = () => {
  Alert.alert("Searching..");
};

const Header = ({ headerDetails }) => {
  return (
    <View style={styles.HeaderContainer}>
      <TextInput
        style={styles.searchbar}
        onKeyPress={ShowAlrt}
        placeholder="Search the menu.."
      />
      <Text style={styles.title}>{headerDetails.name}</Text>
      <Text style={styles.desciption}>{headerDetails.description}</Text>
      <Text style={styles.rating}>{headerDetails.rating}</Text>
      <Text style={styles.location}>Location : {headerDetails.location}</Text>
    </View>
  );
};
function MenuList({ route, navigation }) {
  const { items } = route.params;
  console.log("called...");
  return (
    <ScrollView>
      <Header headerDetails={items} />
      <ItemListAnime items={items.items} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  HeaderContainer: {
    height: 260,
    width: Layout.width - 20,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: Colours.darkforestgreen,
    marginTop: 20,
    marginBottom: 10,
  },
  desciption: {
    color: Colours.lightforestgreen,
    width: Layout.width - 100,
  },
  rating: {
    fontSize: 40,
    color: Colours.gold,
  },

  searchbar: {
    backgroundColor: Colours.offwhite,
    padding: Layout.paddingSmall,
    fontSize: 18,
    borderRadius: 10,
  },
  location: {
    color: Colours.darkforestgreen,
  },
});
export default MenuList;
