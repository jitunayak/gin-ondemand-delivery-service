import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import demoimage from "./../../assets/demo.png";
import { Colours } from "../Constants/Colours";

const ItemListLongCards = ({ list, navigation }) => {
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <>
      {/* <Image source={demoimage} onPress={onPress} style={[styles.item]}></Image> */}
      <TouchableOpacity
        onPress={() => MoveToDetailsPage(item.id)}
        style={[styles.innerText]}
      >
        <Text style={[styles.title, textColor, { fontSize: 18 }]}>
          {item.name}
        </Text>
        <Text style={{ color: Colours.offwhite }}>{item.location}</Text>
        <Text style={{ color: Colours.gold, fontSize: 26 }}>
          {item.rating}{" "}
        </Text>
      </TouchableOpacity>
    </>
  );

  const MoveToDetailsPage = (id) => {
    navigation.push("Details", { items: list[id] });
  };

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, { color: Colours.darkforestgreen, padding: 10 }]}
      >
        Special
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    height: 220,
  },
  item: {
    height: 160,
    width: 160,
    opacity: 0.3,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  innerText: {
    padding: 10,
    height: 160,
    width: 260,
    margin: 10,
    backgroundColor: Colours.accentcolor,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Colours.white,
  },
});

export default ItemListLongCards;
