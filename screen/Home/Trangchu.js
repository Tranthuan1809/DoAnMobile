import { SearchBar } from "react-native-elements";
import React, { useState, useEffect } from "react";
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { SafeAreaView } from "react-native-safe-area-context";
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
const ListData = [
  {
    id: "1",
    title: "Phạm Hoài Tuấn",
  },
  {
    id: "2",
    title: "Đàm Quốc Lượng",
  },
  {
    id: "3",
    title: "Hoàng Văn Hiếu",
  },
  {
    id: "4",
    title: "Huỳnh Công Viên",
  },
  {
    id: "5",
    title: "Nguyễn Đại Mai Tiến",
  },
];
export default function App() {
  const navigation = useNavigation();
  const [filterData, setFilterData] = useState([]);
  // const [masterData, setMasterData] = useState([]);
  const [search, setfilterdData] = useState("");

  // useEffect(() => {
  //   fetchPost();
  //   return () => {};
  // }, []);
  // const fetchPost = () => {
  //   const apiURL = "https://jsonplaceholder.typicode.com/posts";
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       searchFilter(responseJson);
  //       setMasterData(responseJson);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const searchFilter = (text) => {
    if (text) {
      const newData = ListData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setfilterdData(text);
    } else {
      setFilterData(null);
      setfilterdData(text);
    }
  };
  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => Alert.alert("click cailon")}>
        <Text style={style.itemStyle}>
          {item.id}
          {". "}
          {item.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };
  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8"}}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={{zIndex: 1}}>
        <SearchBar
          containerStyle={style.textInputStyle}
          inputContainerStyle={style.input}
          placeholder="Type Here..."
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
        />
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
      <ScrollView style={{position: 'absolute',zIndex:0,top:'13%'}}>
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
  itemStyle: {
    padding: 15,
    backgroundColor:'white'
  },
  container: {
    backgroundColor: "#338f38",
    height: 55,
    borderBottomColor: "#338f38",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
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
    marginRight: "40%",
    fontWeight: "bold",
    color: "#338f38",
  },
  product: {
    fontSize: 20,
    marginRight: "27%",
    marginLeft: 7,
    fontWeight: "bold",
    color: "#338f38",
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
