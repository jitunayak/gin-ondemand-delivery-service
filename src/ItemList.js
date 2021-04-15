import React from "react";
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colours } from "./Colours";
import { Layout } from "./Layout";
import demoimage from "./../assets/demo.png";

function ItemList() {
  const [todos, setTodos] = React.useState([
    {
      title: "French Burgerddd fff",
      description: "2 veg burgers with sause",
      image: "",
      cost: 220,
      quantity: 0,
      incart: false,
    },
    {
      title: "Cheese Burger",
      description: "2 veg burgers with extra cheese and mayonese ",
      cost: 220,
      quantity: 0,
      incart: false,
    },
    {
      title: "Potato Fries",
      description: "2 veg burgers with sause",
      cost: 220,
      quantity: 0,
      incart: false,
    },
  ]);

  const incrementQuantity = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].incart == 0) newTodos[index].incart = true;
    newTodos[index].quantity = newTodos[index].quantity + 1;

    setTodos(newTodos);
  };

  const decrementQuantity = (index) => {
    const newTodos = [...todos];
    const currentQuantity = newTodos[index].quantity;
    if (currentQuantity != 0) {
      newTodos[index].quantity = currentQuantity - 1;
      if (currentQuantity == 1) newTodos[index].incart = false;

      setTodos(newTodos);
    }
  };

  function ItemList({ item, index }) {
    return (
      <View style={styles.card}>
        <Image
          style={{ ...styles.image, opacity: item.incart ? 0.3 : 1 }}
          source={demoimage}
        ></Image>
        <View
          style={{ width: 180, justifyContent: "center", alignItems: "center" }}
        >
          {item.incart ? (
            <>
              <Text style={{ ...styles.largeQuantity, opacity: 1 }}>
                x {item.quantity}
              </Text>
              <Text style={{ fontSize: 20 }}> in cart</Text>
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
      {todos.map((item, index) => (
        <ItemList key={index} index={index} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  largeQuantity: {
    fontSize: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    width: Layout.width - 210,
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
    height: 180,
    width: 180,
    justifyContent: "center",
    position: "absolute",
  },
  card: {
    flexDirection: "row",
    backgroundColor: Colours.offwhite,
    marginBottom: Layout.marginMedium,
    paddingRight: Layout.paddingMedium,
    width: Layout.width - 20,
    height: 180,
  },
  horizontalContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  quantityBox: {
    backgroundColor: "white",
    padding: Layout.paddingSmall,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 120,
  },
});
export default ItemList;
