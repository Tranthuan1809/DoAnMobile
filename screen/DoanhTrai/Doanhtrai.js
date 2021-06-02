import React, { useState } from "react";
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

function Doanhtrai() {
  const [search, setfilterdData] = useState("");
  const [filterData, setFilterData] = useState([]);

  const searchFilter = (text) => {
    if (text) {
      const newData = Data.filter((item) => {
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
      <TouchableOpacity onPress={() => Alert.alert("click cailon")}>
        <Text style={styles.itemStyle}>
          {item.id}
          {". "}
          {item.name.toUpperCase()}
        </Text>
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
      >
        <SearchBar
          containerStyle={styles.container}
          inputContainerStyle={styles.input}
          placeholder="Seach bar react native"
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
      <FlatList
        numColumns={2}
        data={Data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Thông tin công ty", { item })}
          >
            <Image source={item.src} style={styles.image} />
            <View>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

export default Doanhtrai;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#338f38",
    height: 55,
    borderBottomColor: "#338f38",
  },
  input: { backgroundColor: "white", borderRadius: 10, height: 38 },
  item: {
    backgroundColor: "#338f38",
    borderRadius: 7,
    width: "47%",
    margin: "1.5%",
    height: "96%",
    borderWidth: 1,
    borderColor: "#338f38",
    paddingBottom: "2%",
  },
  image: {
    resizeMode: "stretch",
    width: "100%",
    height: 120,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
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
const Data = [
  {
    key: "1",
    id: 1,
    src: require("../../assets/bgr1.jpg"),
    name: "Công ty TNHH nông sản sạch Việt Nam",
    address: "49 Thái Văn lung, Cẩm Lệ, Đà Nẵng",
  },
  {
    key: "2",
    id: 2,

    src: require("../../assets/bgr2.jpg"),
    name: "Công ty nông sản sạch UD - UK",
    address: "49 Thái Văn lung, Cẩm Lệ, Đà Nẵng",
  },
  {
    key: "3",
    id: 3,

    src: require("../../assets/bgr3.jpg"),
    name: "Công ty HHNN nông sản chất lượng",
    address: "49 Thái Văn lung, Cẩm Lệ, Đà Nẵng",
  },
  {
    key: "4",
    id: 4,

    src: require("../../assets/bgr4.jpg"),
    name: "Công ty nông sản chất lượng cao",
    address: "49 Thái Văn lung, Cẩm Lệ, Đà Nẵng",
  },
  {
    key: "5",
    id: 5,

    src: require("../../assets/bgr5.png"),
    name: "Công ty rau, củ, quả Family",
    address: "49 Thái Văn lung, Cẩm Lệ, Đà Nẵng",
  },
  {
    key: "6",
    id: 6,

    src: require("../../assets/bgr6.jpg"),
    name: "Công ty Clean, quality agricultural products",
    address: "49 Thái Văn lung, Cẩm Lệ, Đà Nẵng",
  },
  {
    key: "7",
    id: 7,

    src: require("../../assets/bgr7.jpg"),
    name: "Công ty TNHH nông sản sạch Phú Yên",
    address: "49 Thái Văn lung, Cẩm Lệ, Đà Nẵng",
  },
];
