import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={StyleSheet.header}>
      <Text style={styles.title}> To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "coral",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "coral",
    borderRadius: 50,
  },
});
