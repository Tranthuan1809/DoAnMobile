import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Getall() {
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
    <SafeAreaView style={{ backgroundColor: "white", paddingVertical: 5 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productStyle}
              onPress={() => navigation.navigate("Chi tiết sản phẩm", { item })}
            >
              <Image
                source={{ uri: item.src }}
                style={styles.image}
              ></Image>
              <View style={styles.title}>
              <Text style={styles.text}>Mã : {item.qrCode}</Text>
                <Text style={styles.text}>Tên: {item.name}</Text>
                <Text style={styles.text}>Giá : {item.price} \1Kg</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}
export default Getall;
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: "auto",
    margin: 2,
    borderRadius: 10,
    resizeMode: "stretch",
    borderWidth: 1,
    borderColor: "white",
  },
  productStyle: {
    flex: 1,
    maxWidth: '49%',
    maxHeight: 170,
    marginHorizontal: 3,
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
  title: { paddingHorizontal: "2%",paddingBottom:'2%' },
  text: { color: "white", fontWeight: "bold" },
});
