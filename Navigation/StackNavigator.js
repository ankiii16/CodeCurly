import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import AskQustionScreen from "../Screens/AskQuestionScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import React from "react";
const MainStackNavigator = createStackNavigator();
const ProfileStackNavigator = createStackNavigator();
export function MainStack() {
  return (
    <MainStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          shadowColor: "#212121",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <MainStackNavigator.Screen name="Home" component={HomeScreen} />

      <MainStackNavigator.Screen
        name="AskQuestion"
        options={{ title: "Upload Question" }}
        component={AskQustionScreen}
        initialParams={{ itemId: 42 }}
      />
    </MainStackNavigator.Navigator>
  );
}
export function ProfileStack() {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          shadowColor: "#212121",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <ProfileStackNavigator.Screen name="Profile" component={ProfileScreen} />
    </ProfileStackNavigator.Navigator>
  );
}
