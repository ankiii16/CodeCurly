import { createStackNavigator } from "@react-navigation/stack";
import { MainStack, ProfileStack } from "./StackNavigator";
import ProfileScreen from "../Screens/ProfileScreen";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

export default function MyStack() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Main" component={MainStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
    </Drawer.Navigator>
  );
}
