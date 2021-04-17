import React from "react";
import { View, ScrollView, Text, Image, StatusBar } from "react-native";
import ItemListAnime from "../Components/ItemListAnime";
import ItemListLongCards from "../Components/ItemListLongCards";
import PrimaryList from "../Components/PrimaryList";
import { Colours } from "../Constants/Colours";
import DATA from "../DATA";

function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
        <StatusBar style="auto" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            padding: 15,
            color: Colours.darkforestgreen,
          }}
        >
          GA -244,BBSR{" "}
        </Text>
        <View
          style={{
            backgroundColor: Colours.darkforestgreen,
            height: 200,
            margin: 10,
            borderRadius: 10,
          }}
        ></View>

        <PrimaryList list={DATA} navigation={navigation} />
        <ItemListLongCards list={DATA} navigation={navigation} />
        <ItemListAnime list={DATA} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
