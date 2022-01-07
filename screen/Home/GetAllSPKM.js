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
import { SearchBar } from "react-native-elements";

function Getall() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setfilterdData] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Tranthuan1809/DoAnMobile/master/sanpham.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json.spbc))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  const navigation = useNavigation();

  useEffect(() => {
    fetchPost();
    return () => {};
  }, []);
  const fetchPost = () => {
    const apiURL =
      "https://raw.githubusercontent.com/Tranthuan1809/DoAnMobile/master/sanpham.json";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        searchFilter(responseJson.spbc);
        setMasterData(responseJson.spbc);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
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
      <TouchableOpacity
      activeOpacity={0.9}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Chi tiết sản phẩm BC", { item })}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "stretch",
            marginHorizontal: "1.5%",
          }}
          source={{
            uri: item.src,
          }}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const ItemSeparatorView = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", paddingVertical: 5 }}>
      <View
        style={{
          position: "absolute",
          zIndex: 2,
          flex: 1,
          width: "100%",
        }}
      >
        <SearchBar
          containerStyle={styles.textInputStyle}
          inputContainerStyle={styles.input}
          placeholder="Nhập ở đây..."
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

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{ marginTop: "15%" }}
          numColumns={2}
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productStyle}
              onPress={() => navigation.navigate("Chi tiết sản phẩm BC", { item })}
            >
              <Image source={{ uri: item.src }} style={styles.image}></Image>
              <View style={styles.title}>
                <Text style={styles.text}>Mã : {item.code}</Text>
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
    maxWidth: "49%",
    maxHeight: 170,
    marginHorizontal: 3,
    backgroundColor: "#eae9e9",
    borderStyle: "solid",
    borderColor: "#FFD700",
    borderWidth: 1,
    borderRadius: 7,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    elevation: 5,
    marginBottom: 10,
  },
  title: { paddingHorizontal: "2%", paddingBottom: "2%" },
  text: { color: "black", fontWeight: "bold" },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
  },
  textInputStyle: {
    borderWidth: 1,
    borderTopColor: "#FFD700",
    borderRightColor: "#FFD700",
    borderLeftColor: "#FFD700",
    borderBottomColor: "#FFD700",
    backgroundColor: "#FFD700",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
