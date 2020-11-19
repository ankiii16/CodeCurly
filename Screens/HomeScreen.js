import React, { useState, Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Search from "../components/Search";

export default function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Search toggleDrawer={toggleDrawerHandler} />,
    });
  }, [navigation]);
  const toggleDrawerHandler = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <Text>Home js screen</Text>
      <Button
        title="go to ask screen"
        onPress={() => {
          navigation.push("AskQuestion", {
            itemId: "This is how you pass params",
          });
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
