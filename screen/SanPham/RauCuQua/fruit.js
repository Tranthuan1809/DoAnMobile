import React, { useState ,useEffect} from "react";
import {
  FlatList,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Product() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/PhamTuanIT99/App_TCNS/master/sanpham.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json.fruit))
      .then((error) => console.error(error));
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
                resizeMode: "stretch",
                height: 100,
                width: "auto",
                marginHorizontal: 2,
                marginVertical: 2,
              }}
              source={{uri: item.src}}
            ></Image>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
      ></FlatList>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  productStyle: {
    width: 180,
    height: 160,
    marginHorizontal: 6,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 7,
    backgroundColor: "white",
  },
});
