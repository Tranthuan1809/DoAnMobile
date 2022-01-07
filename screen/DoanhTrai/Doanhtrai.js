import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

function Doanhtrai() {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setfilterdData] = useState("");

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
        searchFilter(responseJson.farm);
        setMasterData(responseJson.farm);
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
        onPress={() => navigation.navigate("Thông tin công ty", { item })}
      >
        <Image
          style={{
            width: 70,
            height: 50,
            resizeMode: "stretch",
            marginHorizontal: "1.5%",
          }}
          source={{ uri: item.logo }}
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

  const navigation = useNavigation();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Tranthuan1809/DoAnMobile/master/sanpham.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json.farm))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: "3.5%",
          zIndex: 2,
          flex: 1,
          width: "100%",
        }}
      >
        <SearchBar
          containerStyle={styles.container}
          inputContainerStyle={styles.input}
          placeholder="Tìm kiếm theo tên công ty"
          onChangeText={(text) => searchFilter(text)}
          value={search}
        />
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
      <ScrollView style={{ zIndex: 0, marginTop: "15%" }}>
        <FlatList
          style={{ zIndex: 0 }}
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Thông tin công ty", { item })}
            >
              <Image source={{ uri: item.logo }} style={styles.image} />
              <View>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Doanhtrai;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFD700",
    height: 55,
    borderBottomColor: "#FFD700",
  },
  input: { backgroundColor: "white", borderRadius: 10, height: 38 },
  item: {
    backgroundColor: "#FFD700",
    borderRadius: 7,
    width: "47%",
    margin: "1.5%",
    height: "96%",
    borderWidth: 1,
    borderColor: "#FFD700",
    paddingBottom: "2%",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 120,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "2%",
  },
  itemStyle: {
    padding: 15,
  },
});
