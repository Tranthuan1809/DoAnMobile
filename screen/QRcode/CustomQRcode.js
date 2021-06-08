import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QRcode from "./QRCode";
import DetailSPQR from "./DetailSPQRcode";

function QRcodeScreen() {
  return <QRcode />;
}

function DetailSPQRScreen() {
  return <DetailSPQR />;
}
const Stack = createStackNavigator();
function CustomNewsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={QRcodeScreen}
        name="Quét mã QR code"
        options={{headerShown: false}}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerTintColor: "green",headerBackTitleVisible: false }}
        component={DetailSPQRScreen}
        name="Chi tiết khi quét QR"
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default CustomNewsScreen;
