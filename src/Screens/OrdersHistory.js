import React from "react";
import { View, Text, StyleSheet } from "react-native";

function OrdersHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.search}>Orders History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    fontSize: 30,
  },
  container: {
    padding: 10,
  },
});
export default OrdersHistory;
