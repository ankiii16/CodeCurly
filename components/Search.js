import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";

export default class Search extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={this.props.toggleDrawer}>
          <FontAwesome
            name="user-circle"
            style={{ marginLeft: 10 }}
            size={24}
            color="#9E9E9E"
          />
        </TouchableOpacity>
        <View style={styles.nestedContainer}>
          <Ionicons
            name="md-search"
            style={{ paddingLeft: 10, paddingRight: 10 }}
            size={24}
            color="#9E9E9E"
          />
          <TextInput
            style={styles.searchTextInput}
            placeholder="Search Here"
            placeholderTextColor="#9E9E9E"
            keyboardAppearance="dark"
          />
        </View>
        <Ionicons
          style={{ marginRight: 10 }}
          name="md-notifications"
          size={24}
          color="#9E9E9E"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 40,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    marginLeft: Platform.OS === "ios" ? 0 : -15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  nestedContainer: {
    backgroundColor: "#212121",

    width: Dimensions.get("window").width / 1.3,
    height: "75%",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchTextInput: {
    flex: 1,
    color: "white",
  },
});
