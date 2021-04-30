import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import SnackBar from "react-native-snackbar-component";
import { Colours } from "../Constants/Colours";
import DATA from "../DATA";
import ItemListAnime from "../Components/ItemListAnime";
import { Layout } from "../Constants/Layout";
import { Icon } from "react-native-elements";

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
        {searching ? <></> : <Header headerDetails={items} />}
        <View
          style={[
            styles.searchIcon,
            {
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colours.offwhite,
              margin: 20,
              borderRadius: 10,
            },
          ]}
        >
          <Icon
            type="ionicon"
            style={{ padding: 10 }}
            name="ios-search"
            size={20}
            color={Colours.lightforestgreen}
          />

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
        </View>
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
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Searchbar items={items} />
        <ItemListAnime items={allitems} />
      </ScrollView>
      <SnackBar
        useNativeDriver={true}
        bottom={20}
        right={20}
        left={20}
        visible={!searching}
        messageColor={Colours.white}
        accentColor={Colours.white}
        containerStyle={styles.SnackBar}
        backgroundColor={Colours.blacklight}
        textMessage="Added...."
        actionHandler={() => {
          navigation.push("Order", {
            items: allitems.filter((item) => item.quantity >= 1),
          });
        }}
        actionText="Go to CART"
      />
    </>
  );
}

const styles = StyleSheet.create({
  messageStyle: {
    fontSize: 20,
    color: Colours.accentcolor,
  },
  SnackBar: {
    height: 50,
    borderRadius: 10,
    width: 120,
  },
  HeaderContainer: {
    width: Layout.width,
    padding: 22,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: Colours.blacklight,
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
    margin: 4,
    fontSize: 18,
    borderRadius: 10,
    width: Layout.width - 100,
    fontWeight: "600",
  },
  location: {
    color: Colours.darkforestgreen,
  },
});
export default MenuList;
