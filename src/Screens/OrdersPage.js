import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colours } from "../Constants/Colours";
import { Layout } from "../Constants/Layout";

function OrdersPage() {
  const MakeVibration = () => {};
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.button} onPress={MakeVibration}>
        <Text style={styles.btn_text}>Place Order</Text>
      </TouchableOpacity>
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
    position: "absolute",
    bottom: 0,
    width: Layout.width - 20,
    marginBottom: 20,
  },
  btn_text: {
    fontSize: 20,
    color: Colours.white,
    textAlign: "center",
  },
});
export default OrdersPage;
