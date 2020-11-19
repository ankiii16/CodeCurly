import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import Search from "../components/Search";

export default function ProfileScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Home"
          onPress={() => {
            console.log(navigation.navigate("Home"));
          }}
        />
      ),
    });
  }, [navigation]);
  const [update, setUpdate] = useState("");

  return (
    <View style={styles.container}>
      <Search />
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
