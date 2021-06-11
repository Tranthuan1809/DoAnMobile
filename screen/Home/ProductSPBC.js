import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default Product = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/PhamTuanIT99/App_TCNS/master/sanpham.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json.sells))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          numColumns={data.length}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Chi tiết sản phẩm BC", { item })}
              activeOpacity={0.5}
              style={style.productStyle}
            >
              <Image
                style={{
                  resizeMode: "stretch",
                  height: 100,
                  width: "auto",
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  marginVertical: 2,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                source={{ uri: item.src }}
              ></Image>
              <View style={style.title}>
                <Text style={style.text}>Mã : {item.code}</Text>
                <Text style={style.text}>Tên: {item.name}</Text>
                <Text style={style.text}>Giá : {item.price.toLocaleString('en-us')} \1Kg</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  productStyle: {
    flex: 1,
    width: 170,
    maxHeight: 166,
    marginHorizontal: 6,
    backgroundColor: "#338f38",
    borderStyle: "solid",
    borderColor: "#81F781",
    borderWidth: 1,
    borderRadius: 7,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    elevation: 5,
    marginBottom: 10,
  },
  title: { paddingHorizontal: "2%" },
  text: { color: "white", fontWeight: "bold" },
});
