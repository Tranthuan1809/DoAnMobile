import { SearchBar } from "react-native-elements";
import React, { useState } from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Product from "./Product";
import ProductSPBC from "./ProductSPBC";
import { useNavigation } from "@react-navigation/native";

const Data = [
  {
    id: 1,
    name: "abcabc",
    src: require("../../assets/slide-bgr1.jpg"),
  },
  {
    id: 2,
    name: "abcabc",
    src: require("../../assets/slide-bgr3.jpg"),
  },
  {
    id: 3,
    name: "abcabc",
    src: require("../../assets/slide-bgr2.jpg"),
  },
  {
    id: 4,
    name: "abcabc",
    src: require("../../assets/slide-bgr4.jpg"),
  },
];
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
        <View style={style.slide}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={2}
            showPagination
            data={Data}
            renderItem={({ item }) => (
              <View style={style.child}>
                <Image
                  style={{ maxHeight: 160, width: "auto" }}
                  source={item.src}
                ></Image>
              </View>
            )}
          />
        </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={style.productNew}>Sản phẩm mới</Text>
            <TouchableOpacity
              style={{ marginTop: 4 }}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Sản phẩm mới")}
            >
              <Text style={style.getall}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Product />
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={style.product}>Sản phẩm bán chạy</Text>
            <TouchableOpacity
              style={{ marginTop: 4 }}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("Sản phẩm bán chạy")}
            >
              <Text style={style.getall}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ProductSPBC />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const { width } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    backgroundColor: "#338f38",
    height: 55,
    borderBottomColor: "#338f38",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 38,
  },
  slide: { backgroundColor: "white", height: 160 },
  child: { width, justifyContent: "center" },
  getall: {
    fontSize: 16,
    color: "red",
  },
  productNew: {
    fontSize: 20,
    marginLeft: 7,
    marginRight:'40%',
    fontWeight: "bold",
    color: "#338f38",
  },
  product: {
    fontSize: 20,
    marginRight:'27%',
    marginLeft: 7,
    fontWeight: "bold",
    color: "#338f38",
  },
});
