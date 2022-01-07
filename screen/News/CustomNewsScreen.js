import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListNews from "./ListNews";
import DetailNews from "./DetailNews";

function ListNewsScreen() {
  return <ListNews />;
}

function DetailNewsScreen() {
  return <DetailNews />;
}
const Stack = createStackNavigator();
function CustomNewsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerTintColor: "green" }}
        component={ListNewsScreen}
        name="Tin tức"
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerTintColor: "green",headerBackTitleVisible: false }}
        component={DetailNewsScreen}
        name="Chi tiết tin tức"
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default CustomNewsScreen;
