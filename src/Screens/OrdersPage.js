import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colours } from "../Constants/Colours";
import { Layout } from "../Constants/Layout";
import { Icon } from "react-native-elements";

function OrdersPage({ route, navigation }) {
  const address = "GA 244, Sailashree Vihar, Bhubaneswar \n pin 754004";

  const { items } = route.params;
  const [allitems, setAllItems] = useState(items);
  const [totalAmount, setTotalAmount] = useState(0);
  const deliveryCharges = 35;
  const serviceCharges = 10;
  const [emptyCart, setEmptyCart] = useState(false);

  useEffect(() => {
    let final = 0;
    allitems.map((item) => {
      let amount = item.quantity * item.cost;
      final = amount + final;
    });
    setTotalAmount(final + deliveryCharges + serviceCharges);
    if (final == 0) {
      setEmptyCart(true);
    }
    return () => {};
  }, [allitems]);

  const incrementQuantity = (index) => {
    const newTodos = [...allitems];
    newTodos[index].quantity = newTodos[index].quantity + 1;
    setAllItems(newTodos);
  };

  const decrementQuantity = (index) => {
    const newTodos = [...allitems];
    const currentQuantity = newTodos[index].quantity;
    if (currentQuantity >= 2) {
      newTodos[index].quantity = currentQuantity - 1;
      setAllItems(newTodos);
    } else if (currentQuantity == 1) {
      setAllItems(newTodos.filter((item, i) => i != index));
    }
  };

  const MakeVibration = () => {};

  const Header = () => {
    return (
      <>
        <Text style={{ fontSize: 26, fontWeight: "700", marginBottom: 30 }}>
          Order Summary
        </Text>
        <View style={styles.address}>
          <Text style={{ fontWeight: "500", padding: 10, fontSize: 16 }}>
            Delivery Address
          </Text>
          <Text
            style={{
              color: Colours.lightforestgreen,
              padding: 10,
              fontSize: 16,
            }}
          >
            {address}
          </Text>
        </View>
      </>
    );
  };
  const OrderSummary = () => {
    return (
      <>
        <View
          style={{
            height: 2,
            backgroundColor: Colours.lightforestgreen,
            width: Layout.width - 80,
            margin: 20,
          }}
        ></View>
        <View style={styles.itemrow}>
          <Text style={{ fontSize: 16 }}> Delivery Charges </Text>
          <Text style={{ fontSize: 16 }}> ₹35</Text>
        </View>
        <View style={styles.itemrow}>
          <Text style={{ fontSize: 16 }}> Service Charges </Text>
          <Text style={{ fontSize: 16 }}> ₹10</Text>
        </View>
        <View style={[styles.itemrow, { marginTop: 10 }]}>
          <Text style={{ fontWeight: "700", fontSize: 20 }}> Total </Text>
          <Text style={{ fontWeight: "700", fontSize: 20 }}>
            {" "}
            ₹{totalAmount}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.push("OrderTracker")}
          >
            <Text style={styles.btn_text}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const OrdersList = ({ title, quantity, cost, index }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          margin: 10,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
          <Text style={{ fontSize: 16 }}> ₹{cost}</Text>
        </View>
        <View style={styles.quantityBox}>
          <Icon
            name="trash-outline"
            type="ionicon"
            color="#f50"
            size={32}
            onPress={() => decrementQuantity(index)}
          />
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              padding: 6,
              textAlign: "center",
            }}
          >
            {quantity}
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
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      {allitems.map((item, index) => {
        return (
          <OrdersList
            key={index}
            index={index}
            title={item.title}
            quantity={item.quantity}
            cost={item.cost}
          />
        );
      })}

      {emptyCart ? (
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            margin: 30,
          }}
        >
          Add items for billing
        </Text>
      ) : (
        <OrderSummary />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  quantityBox: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    margin: 20,
  },
  itemrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  address: {
    backgroundColor: Colours.lightaccentcolor,
    justifyContent: "space-evenly",
    padding: Layout.paddingSmall,
  },
  button: {
    backgroundColor: Colours.accentcolor,
    paddingTop: 14,
    paddingBottom: 14,
    margin: 10,
    borderRadius: 8,
    position: "absolute",
    bottom: 0,
    width: Layout.width - 60,
    marginBottom: 20,
  },
  btn_text: {
    fontSize: 20,
    color: Colours.white,
    textAlign: "center",
  },
});
export default OrdersPage;
