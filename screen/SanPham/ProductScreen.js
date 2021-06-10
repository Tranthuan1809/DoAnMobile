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
  // const [filterData, setFilterData] = useState([]);
  // const [masterData, setMasterData] = useState([]);
  // const [search, setfilterdData] = useState("");

  // useEffect(() => {
  //   fetchPost();
  //   return () => {};
  // }, []);
  // const fetchPost = () => {
  //   const apiURL = "https://raw.githubusercontent.com/PhamTuanIT99/App_TCNS/master/sanpham.json";
  //   fetch(apiURL)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       searchFilter(responseJson.vegetable);
  //       setMasterData(responseJson.vegetable);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const searchFilter = (text) => {
  //   if (text) {
  //     const newData = masterData.filter((item) => {
  //       const itemData = item.name
  // //         ? item.name.toUpperCase()
  //         : "".toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilterData(newData);
  //     setfilterdData(text);
  //   } else {
  //     setFilterData(null);
  //     setfilterdData(text);
  //   }
  // };
  // const ItemView = ({ item }) => {
  //   return (
  //     <TouchableOpacity
  //       style={{
  //         flexDirection: "row",
  //         backgroundColor: "white",
  //         justifyContent: "flex-start",
  //         alignItems: "center",
  //       }}
  //       onPress={() => navigation.navigate("Chi tiết sản phẩm", { item })}
  //     >
  //       <Image
  //         style={{
  //           width: 50,
  //           height: 50,
  //           resizeMode: "stretch",
  //           marginHorizontal: "1.5%",
  //         }}
  //         source={{ uri: item.src }}
  //       />
  //       <Text>{item.name}</Text>
  //     </TouchableOpacity>
  //   );
  // };
  // const ItemSeparatorView = () => {
  //   return (
  //     <View
  //       style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
  //     />
  //   );
  // };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgb(255,58,82)",
        padding:10,
          // flex: 1,
          // flexDirection:"row"
        }}>
          <Text style={{
            color:"#fff",
            fontSize:18,
            fontWeight:"bold"
          }}>
            Danh Sách Sản Phẩm
          </Text>
          {/* <Image
            source={require('../../assets/products.png')}
            resizeMode="cover"
            style={{
              width:50,
              height:50
            }}
          /> */}
        {/* <SearchBar
          containerStyle={style.textInputStyle}
          inputContainerStyle={style.input}
          placeholder="Type Here..."
          onChangeText={(text) => searchFilter(text)}
          value={search}
          underlineColorAndroid="transparent"
        /> */}
        {/* <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        /> */}
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginRight: 20,
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
