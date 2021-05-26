import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Vagetable from "./RauSach/vegetable";
import Fruit from "./RauCuQua/fruit";
import Seed from "./Hat/seed";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  const [search, updateSearch] = useState();
  return (
    <SafeAreaView style={{flex:1}}>
      <SearchBar
        containerStyle={style.container}
        inputContainerStyle={style.input}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.product}>Sản phẩm rau sạch</Text>
            <TouchableOpacity
              style={{ marginTop: 4 }}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Sản phẩm rau sạch")}
            >
              <Text style={style.getall}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <Vagetable />
          <View style={{ flexDirection: "row" }}>
            <Text style={style.cuqua}>Sản phẩm củ, quả</Text>
            <TouchableOpacity
              style={{ marginTop: 4 }}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Sản phẩm củ, quả")}
            >
              <Text style={style.getfruit}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <Fruit />
          <View style={{ flexDirection: "row" }}>
            <Text style={style.titleSeed}>Sản phẩm hạt</Text>
            <TouchableOpacity
              style={{ marginTop: 4 }}
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
    marginRight: '22%',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#338f38",
  },
  titleSeed: {
    fontSize: 22,
    marginRight: '36%',
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#338f38",
  },
  cuqua: {
    fontSize: 22,
    marginRight: '26%',
    marginTop: 10,
    paddingLeft: 5,
    paddingBottom: 1,
    paddingRight: 8,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#338f38",
  },
});
