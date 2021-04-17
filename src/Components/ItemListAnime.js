import React, { useRef } from "react";
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

function ItemListAnime({ items }) {
  const [todos, setTodos] = React.useState(items);

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

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
          style={{ width: 180, justifyContent: "center", alignItems: "center" }}
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
            <Text
              style={{ opacity: item.incart ? 1 : 0, fontSize: 16 }}
              onPress={() => decrementQuantity(index)}
            >
              REM
            </Text>
            <Text>{item.quantity}</Text>
            <Text
              style={{ fontSize: 16 }}
              onPress={() => incrementQuantity(index)}
            >
              ADD
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
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
        keyExtractor={(item, index) => item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  largeQuantity: {
    fontSize: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    width: Layout.width - 200,
    color: Colours.darkforestgreen,
  },
  description: {
    width: Layout.width - 210,
    fontWeight: "500",
    color: Colours.lightforestgreen,
  },
  cost: {
    fontWeight: "600",
  },
  image: {
    height: 160,
    width: 160,
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
    height: 160,
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
    justifyContent: "space-around",
    width: 120,
  },
});
export default ItemListAnime;
