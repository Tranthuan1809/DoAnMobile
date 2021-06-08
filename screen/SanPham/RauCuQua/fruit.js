import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/PhamTuanIT99/App_TCNS/master/sanpham.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json.fruit))
      .catch((error) => console.error(error));
  }, []);
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ backgroundColor: "#338f38", paddingVertical: 10 }}
      horizontal={true}
    >
      <FlatList
        key={data.length}
        numColumns={data.length}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Chi tiết sản phẩm", { item })}
            activeOpacity={0.5}
            style={style.productStyle}
          >
            <Image
              style={{
                height: 100,
                width: "auto",
                marginHorizontal: 2,
                marginVertical: 2,
                resizeMode:'stretch'
              }}
              source={{ uri: item.src }}
            ></Image>
            <View style={style.title}>
              <Text style={style.text}>Mã: {item.code}</Text>
              <Text style={style.text}>Tên: {item.name}</Text>
              <Text style={style.text}>Giá: {item.price} VNĐ</Text>
              </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  productStyle: {
    width: 180,
    maxHeight: 170,
    marginHorizontal:4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 7,
    backgroundColor: "white",
  },
  title: { paddingHorizontal: "2%", paddingBottom: "2%"  },
  text: { fontWeight: "bold",color:'#118F3E' },
});
