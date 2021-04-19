import React, { useState, useEffect } from "react";
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
import { SearchBar } from "react-native-elements";

function MenuList({ route, navigation }) {
  const { items } = route.params;

  const [allitems, setallitems] = useState(items.items);
  const [searchTerm, setSearchTerm] = useState("");

  const ShowAlrt = () => {
    setSearching(true);
  };

  useEffect(() => {
    const filtereditems = items.items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setallitems(filtereditems);
    return () => {};
  }, [searchTerm]);

  const Searchbar = ({ items }) => {
    return (
      <>
        <TextInput
          style={styles.searchbar}
          onFocus={ShowAlrt}
          clearButtonMode={"while-editing"}
          autoFocus={searching}
          onSubmitEditing={() => setSearching(false)}
          placeholder="Search the menu.."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {searching ? <></> : <Header headerDetails={items} />}
      </>
    );
  };
  const Header = ({ headerDetails }) => {
    return (
      <>
        <View style={styles.HeaderContainer}>
          <Text style={styles.title}>{headerDetails.name}</Text>
          <Text style={styles.desciption}>{headerDetails.description}</Text>
          <Text style={styles.rating}>{headerDetails.rating}</Text>
          <Text style={{ color: Colours.lightforestgreen }}>
            Location :{" "}
            <Text style={styles.location}> {headerDetails.location}</Text>
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: Colours.offwhite,
            borderBottomWidth: 2,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 10,
            marginTop: 0,
          }}
        />
      </>
    );
  };

  const [searching, setSearching] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Searchbar items={items} />
      <ItemListAnime items={allitems} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: Layout.width - 20,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: Colours.darkforestgreen,
    marginBottom: 10,
  },
  desciption: {
    color: Colours.lightforestgreen,
    width: Layout.width - 100,
    fontSize: 16,
  },
  rating: {
    fontSize: 40,
    color: Colours.gold,
  },

  searchbar: {
    backgroundColor: Colours.offwhite,
    padding: Layout.paddingSmall,
    margin: 10,
    fontSize: 18,
    borderRadius: 10,
    width: Layout.width - 20,
  },
  location: {
    color: Colours.darkforestgreen,
  },
});
export default MenuList;
