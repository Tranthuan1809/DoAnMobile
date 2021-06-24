import { SearchBar } from "react-native-elements";
import React, { useState,useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Vagetable from "./RauSach/vegetable";
import Fruit from "./RauCuQua/fruit";
import Seed from "./Hat/seed";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green",
        padding:10,
        }}>
          <Text style={{
            color:"#fff",
            fontSize:18,
            fontWeight:"bold"
          }}>
            Danh Sách Sản Phẩm
          </Text>
      </View>
      <ScrollView style={{ zIndex: 0 ,marginTop:'2%'}}>
          <View style={style.flexAll}>
            <Text
             style={style.product}
             >
               Sản phẩm rau sạch</Text>
            <TouchableOpacity
              style={style.titleAll}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Sản phẩm rau sạch")}
            >
              <Text style={style.getall}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <Vagetable />
          <View style={style.flexAll}>
            <Text style={style.cuqua}>Sản phẩm củ, quả</Text>
            <TouchableOpacity
              style={style.titleAll}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Sản phẩm củ, quả")}
            >
              <Text style={style.getfruit}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <Fruit />
          <View style={style.flexAll}>
            <Text style={style.titleSeed}>Sản phẩm hạt</Text>
            <TouchableOpacity
              style={style.titleAll}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Sản phẩm hạt")}
            >
              <Text style={style.getSeed}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <Seed />
      </ScrollView>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "#338f38",
    borderBottomColor: "#338f38",
  },
  flexAll: {
    flexDirection: "row", marginTop: 5 ,justifyContent:'space-between',marginRight:10
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 38,
  },
  getall: {
    fontSize: 16,
    color: "#DE0000",
    marginTop: 7,
  },
  getfruit: {
    fontSize: 16,
    color: "#DE0000",
    marginTop: 11,
  },
  getSeed: {
    fontSize: 16,
    color: "#DE0000",
    marginTop: 11,
  },
  product: {
    fontSize: 22,
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#338f38",
    borderTopRightRadius: 10,
    minWidth: 180,
  },
  titleAll: {
    marginTop: 4,
  },
  titleSeed: {
    fontSize: 22,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#338f38",
    borderTopRightRadius: 10,
    minWidth: 180,
  },
  cuqua: {
    fontSize: 22,
    marginTop: 10,
    paddingLeft: 5,
    paddingBottom: 1,
    paddingRight: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#338f38",
    borderTopRightRadius: 10,
  },
  textInputStyle: {
    borderWidth: 1,
    borderTopColor: "#338f38",
    borderRightColor: "#338f38",
    borderLeftColor: "#338f38",
    borderBottomColor: "#338f38",
    backgroundColor: "#338f38",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
