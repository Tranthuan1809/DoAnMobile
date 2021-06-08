import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Product() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/PhamTuanIT99/App_TCNS/master/sanpham.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json.vegetable))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ backgroundColor: "#338f38", paddingVertical: 10 }}
      horizontal={true}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          key={data.length}
          numColumns={data.length}
          data={data}
          keyExtractor={({ id }, index) => id}
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
      )}
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
