import React, { useRef, useEffect } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colours } from "../Constants/Colours";
import { Layout } from "../Constants/Layout";
import demoimage from "./../../assets/demo.png";
import * as Animatable from "react-native-animatable";
import DATA from "../DATA";
import { Icon } from "react-native-elements";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { FloatingAction } from "react-native-floating-action";
import SnackBar from "react-native-snackbar-component";

function ItemListAnime({ items }) {
  const [todos, setTodos] = React.useState(items);

  useEffect(() => {
    setTodos(items);
    return () => {};
  }, [items]);

  const incrementQuantity = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].incart == 0) {
      newTodos[index].incart = true;
    }
    newTodos[index].quantity = newTodos[index].quantity + 1;

    setTodos(newTodos);
  };

  const decrementQuantity = (index) => {
    const newTodos = [...todos];
    const currentQuantity = newTodos[index].quantity;
    if (currentQuantity != 0) {
      newTodos[index].quantity = currentQuantity - 1;

      if (currentQuantity == 1) {
        newTodos[index].incart = false;
      }

      setTodos(newTodos);
    }
  };

  function ItemList({ item, index }) {
    return (
      <View style={styles.card}>
        <Image
          style={{
            ...styles.image,
            opacity: item.incart ? 0.2 : 1,
          }}
          source={demoimage}
        ></Image>

        <View
          style={{
            width: 140,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 40,
          }}
        >
          {item.incart ? (
            <>
              <Animatable.Text
                animation="zoomIn"
                easing="ease-out"
                iterationCount={1}
                style={{
                  ...styles.largeQuantity,
                  opacity: 1,
                  color: Colours.darkforestgreen,
                }}
              >
                x {item.quantity}
              </Animatable.Text>
              <Text style={{ fontSize: 20, color: Colours.darkforestgreen }}>
                {" "}
                in cart
              </Text>
            </>
          ) : (
            <></>
          )}
        </View>
        <View style={styles.horizontalContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.cost}>₹ {item.cost}</Text>
          <View style={styles.quantityBox}>
            <Icon
              name="trash-outline"
              type="ionicon"
              color="#f50"
              size={32}
              style={{ opacity: item.incart ? 1 : 0 }}
              onPress={() => decrementQuantity(index)}
            />
            <Text
              style={{
                fontWeight: "600",
                fontSize: 18,
                padding: 6,
                textAlign: "center",
                opacity: item.incart ? 1 : 0,
              }}
            >
              {item.quantity}
            </Text>
            <Icon
              name="add-circle"
              type="ionicon"
              size={35}
              color={Colours.accentcolor}
              onPress={() => incrementQuantity(index)}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ marginBottom: 100 }}>
      <Text
        style={{
          padding: 10,
          fontSize: 20,
          fontWeight: "600",
          color: Colours.darkforestgreen,
        }}
      >
        Most Ordered
      </Text>

      <FlatList
        data={todos}
        renderItem={ItemList}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={[styles.title, { textAlign: "center" }]}>
            No matches found
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.accentcolor,
    paddingTop: 14,
    paddingBottom: 14,
    margin: 10,
    borderRadius: 8,
    bottom: 0,
    position: "absolute",
    width: Layout.width - 20,
    marginBottom: 20,
    flex: 1,
  },
  btn_text: {
    fontSize: 20,
    color: Colours.white,
    textAlign: "center",
    flex: 1,
  },
  largeQuantity: {
    fontSize: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    width: Layout.width - 200,
    color: Colours.darkforestgreen,
  },
  description: {
    width: Layout.width - 210,
    fontWeight: "400",
    color: Colours.lightforestgreen,
  },
  cost: {
    fontWeight: "600",
  },
  image: {
    height: 140,
    width: 140,
    justifyContent: "center",
    position: "absolute",
  },
  card: {
    flexDirection: "row",
    backgroundColor: Colours.white,
    marginBottom: Layout.marginSmall,
    paddingRight: Layout.paddingMedium,
    marginLeft: Layout.paddingSmall,
    width: Layout.width - 20,
    height: 140,
    borderBottomColor: Colours.offwhite,
    borderBottomWidth: 1,
    borderTopColor: Colours.offwhite,
    borderTopWidth: 1,
  },
  horizontalContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 0,
  },
  quantityBox: {
    backgroundColor: "white",
    padding: Layout.paddingSmall,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});
export default ItemListAnime;
