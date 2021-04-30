import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SearchPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.search}>Global Search</Text>
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
export default SearchPage;
