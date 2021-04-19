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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "KFC, Patia",
    rating: "4",
    location: "Bhubaneswar",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Hotel Priya",
    rating: "4",
    location: "Patia",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Chinese Fry",
    rating: "4",
    location: "Patia",
  },
];

const PrimaryList = ({ list, navigation }) => {
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <>
      {/* <Image source={demoimage} onPress={onPress} style={[styles.item]}></Image> */}
      <TouchableOpacity
        onPress={() => MoveToDetailsPage(item.id)}
        style={[styles.innerText]}
      >
        <Text style={[styles.title, textColor, { fontSize: 16 }]}>
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
        Top Rated
      </Text>
      <FlatList
        horizontal={true}
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
    height: 200,
  },
  item: {
    height: 120,
    width: 120,
    opacity: 0.3,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  innerText: {
    padding: 10,
    height: 120,
    width: 120,
    margin: 10,
    backgroundColor: Colours.blue,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Colours.white,
  },
});

export default PrimaryList;
