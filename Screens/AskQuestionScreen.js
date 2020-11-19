import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AskQuestionScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.itemId}</Text>
      <Button
        title="Update title"
        onPress={() => {
          navigation.setOptions({ title: "Updated!" });
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
