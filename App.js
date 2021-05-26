import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text } from "react-native";
import CustomHome from './screen/Home/CustomHomeScreen'
import CustomProduct from './screen/SanPham/CustomProductScreen'
import CustomDanhTrai from './screen/DoanhTrai/CustomDoanhTraiScreen'


function CustomHomeScreen() {
  return <CustomHome />
}
function CustomProductScreen() {
  return <CustomProduct />
}
function C() {
  return (
    <View>
      <Text>Hello C</Text>
    </View>
  );
}
function DanhTraiScreen() {
  return <CustomDanhTrai />
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Trang chủ") {
            iconName = focused ? "home" : "home";
          }
          if (route.name === "Sản phẩm") {
            iconName = focused ? "cart" : "cart";
          }
          if (route.name === "Doanh nghiệp") {
            iconName = focused ? "bar-chart-sharp" : "bar-chart-sharp";
          } else if (route.name === "Mã QR") {
            iconName = focused ? "qr-code" : "qr-code";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#338f38",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Trang chủ" component={CustomHomeScreen} />
      <Tab.Screen name="Sản phẩm" component={CustomProductScreen} />
      <Tab.Screen name="Mã QR" component={C} />
      <Tab.Screen name="Doanh nghiệp" component={DanhTraiScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
