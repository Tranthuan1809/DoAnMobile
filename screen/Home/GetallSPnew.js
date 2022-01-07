import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
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
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setfilterdData] = useState("");

  useEffect(() => {
    fetch(
      "https://agriudaethblc.azurewebsites.net/api/app/product?MaxResultCount=100"
    )
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [data]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchPost();
    return () => {};
  }, []);
  const fetchPost = () => {
    const apiURL =
      "https://agriudaethblc.azurewebsites.net/api/app/product?MaxResultCount=100";
    fetch(apiURL)
      .then((response) => response.json())
      .then((responseJson) => {
        searchFilter(responseJson.items);
        setMasterData(responseJson.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.product.name
          ? item.product.name.toUpperCase()
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
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("Chi tiết sản phẩm", { item })}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "stretch",
            marginHorizontal: "1.5%",
          }}
          source={{
            uri: `https://agriudaethblc.azurewebsites.net/UploadImages/${item.product.image}`,
          }}
        />
        <Text>{item.product.name}</Text>
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
              onPress={() => navigation.navigate("Chi tiết sản phẩm", { item })}
            >
              <Image
                source={{
                  uri: `https://agriudaethblc.azurewebsites.net/UploadImages/${item.product.image}`,
                }}
                style={styles.image}
              ></Image>
              <View style={styles.title}>
                <Text style={styles.text}>Mã : {item.product.code}</Text>
                <Text style={styles.text}>Tên: {item.product.name}</Text>
                <Text style={styles.text}>
                  Giá : {item.product.price.toLocaleString("en-us")} \1Kg
                </Text>
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
    backgroundColor: "#FFD700",
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
  title: { paddingHorizontal: "2%", paddingBottom: "2%" },
  text: { color: "white", fontWeight: "bold" },
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
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 40,
  },
});
