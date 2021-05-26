import React from "react";
import {
  FlatList,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

const ListSP = [
  {
    key: "1",
    maCode: "1003",
    src: require("../../assets/ca-rot.jpg"),
    name: "Cà rốt",
    gia: "18.000 VNĐ",
    loai: "Củ, quả",
    nguongoc: "Nông trại Family",
    info: "Cây cà rốt là một loài cây thân thảo, có tên khoa học là Dacus, được người dân Trung Quốc gọi là củ cải đỏ. Đây là cây ăn củ ( chính là phần rễ cái) và sống trong khoảng từ 1 đến 2 năm cho đến khi được thu hoạch. Trong tiếng Ấn Độ, cà rốt được gọi là गाजर, còn tên khoa học là Daucus.",
  },
  {
    key: "2",
    src: require("../../assets/hanh-tay.jpg"),
    name: "Hành tây",
    gia: "11.000",
  },
  {
    key: "3",
    src: require("../../assets/mia.jpg"),
    name: "Mía",
    gia: "1200$",
  },
  {
    key: "4",
    src: require("../../assets/dao.jpg"),
    name: "Đào",
    gia: "1300$",
  },
];
export default function Product() {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true}>
      <FlatList
        numColumns={4}
        data={ListSP}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Chi tiết sản phẩm", { item })}
            activeOpacity={0.5}
            style={style.productStyle}
          >
            <Image
              style={{
                resizeMode: "stretch",
                maxHeight: 100,
                width: "auto",
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginVertical: 2,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              source={item.src}
            />
            <View style={style.title}>
              <Text style={style.text}>Mã : {item.maCode}</Text>
              <Text style={style.text}>Tên: {item.name}</Text>
              <Text style={style.text}>Giá : {item.gia} \1Kg</Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  productStyle: {
    flex: 1,
    width: 170,
    maxHeight: 166,
    marginHorizontal: 6,
    backgroundColor: "#04B431",
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
