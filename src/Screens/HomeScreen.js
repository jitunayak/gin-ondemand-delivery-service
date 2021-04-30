import React, { useEffect } from "react";
import { View, ScrollView, Text, StatusBar, LogBox, Alert } from "react-native";
import ItemListAnime from "../Components/ItemListAnime";
import ItemListLongCards from "../Components/ItemListLongCards";
import PrimaryList from "../Components/PrimaryList";
import { Colours } from "../Constants/Colours";
import DATA from "../DATA";
import { Icon, Avatar } from "react-native-elements";
import userdemo from "./../../assets/userdemo.jpg";
import CarousalHome from "../Components/CarousalHome";

function HomeScreen({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const ChooseLocation = () => {
    navigation.push("Location");
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Icon
              name="locate"
              type="ionicon"
              color={Colours.accentcolor}
              style={{ paddingTop: 15, paddingLeft: 10 }}
            />
            <Text
              onPress={() => ChooseLocation()}
              style={{
                fontSize: 20,
                fontWeight: "700",
                padding: 15,
                color: Colours.darkforestgreen,
              }}
            >
              GA -244,BBSR{" "}
            </Text>
          </View>
          <Avatar
            title="user"
            size={40}
            rounded
            source={userdemo}
            onPress={() => Alert.alert("upcoming..")}
            containerStyle={{ marginTop: 10, marginRight: 10 }}
          />
        </View>

        <CarousalHome />

        <PrimaryList list={DATA} navigation={navigation} />
        <ItemListLongCards list={DATA} navigation={navigation} />
        <ItemListAnime list={DATA} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
