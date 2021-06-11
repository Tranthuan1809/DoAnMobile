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
  const [categoryID, setCategoryID] = useState([]);

  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setfilterdData] = useState("");

  useEffect(() => {
    fetch(
      `https://agriudaethblc.azurewebsites.net/api/app/product/by-category/${categoryID}`
    )
      .then((response) => response.json())
      .then((json) => {
        setMasterData(json.items);
        searchFilter(json.items);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [categoryID]);
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
            uri: `https://agriudaethblc.azurewebsites.net/UploadImages/${item.image}`,
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
  useEffect(() => {
    fetch("https://agriudaethblc.azurewebsites.net/api/app/category")
      .then((response) => response.json())
      .then((json) => setCategoryID(json.items[2].id))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    fetch(
      `https://agriudaethblc.azurewebsites.net/api/app/product/by-category/${categoryID}`
    )
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [categoryID]);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{ backgroundColor: "white", paddingVertical: 5, flex: 1 }}
    >
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
                  uri: `https://agriudaethblc.azurewebsites.net/UploadImages/${item.image}`,
                }}
                style={styles.image}
              ></Image>
              <View style={styles.title}>
                <Text style={styles.text}>Mã : {item.code}</Text>
                <Text style={styles.text}>Tên: {item.name}</Text>
                <Text style={styles.text}>
                  Giá : {item.price.toLocaleString("en-US")} \1Kg
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
  title: { paddingHorizontal: "2%", paddingBottom: "2%" },
  text: { color: "white", fontWeight: "bold" },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 38,
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
