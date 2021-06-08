import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Title = styled.Text`
  color: white;
`;
function DetailDanhTrai() {
  const route = useRoute();
  const { item } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: "stretch",
          height: 160,
          width: "auto",
          borderColor: "green",
          borderRightWidth: 1,
          margin: 15,
        }}
        source={{ uri: item.logo }}
      ></Image>
      <SafeAreaView style={{ flex: 1 }}>
        <SafeAreaView style={styles.contentCTN}>
          <ScrollView>
            <View style={{ paddingTop: "4%", paddingLeft: "5%" }}>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>🏭 Tên công ty: </Text>
                <Text style={styles.textDL}>{item.name}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>📌 Địa chỉ trụ sở chính: </Text>
                <Text style={styles.textDL}>{item.address}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>🤵 Người ĐDPL: </Text>
                <Text style={styles.textDL}>{item.boss}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>✅ Tình trạng hoạt động: </Text>
                <Text style={styles.textDL}>{item.status}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>📇 Giấy phép kinh doanh: </Text>
                <Text style={styles.textDL}>{item.giayphep}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>💱 Mã số thuế: </Text>
                <Text style={styles.textDL}>{item.mst}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>📆 Ngày hoạt động: </Text>
                <Text style={styles.textDL}>{item.ngayhd}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>🚩 Lĩnh vực: </Text>
                <Text style={styles.textDL}>{item.linhvuc}.</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>Thông tin khác: </Text>
                <Text style={styles.font}>{item.content}.</Text>
              </Title>
            </View>
            <Title
              style={{
                fontWeight: "bold",
                fontSize: 16,
                paddingLeft: "1%",
                paddingTop: "5%",
              }}
            >
              Danh sách sản phẩm:
            </Title>
            <View>
              <ScrollView
                style={{ backgroundColor: "#338f38", paddingVertical: 10 }}
                horizontal={true}
              >
                <FlatList
                  key={item.product.length}
                  numColumns={item.product.length}
                  data={item.product}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Chi tiết sản phẩm", { item })
                      }
                      activeOpacity={0.5}
                      style={styles.productStyle}
                    >
                      <Image
                        style={{
                          height: 100,
                          width: "auto",
                          marginHorizontal: 2,
                          marginVertical: 2,
                        }}
                        source={{ uri: item.src }}
                      ></Image>
                      <View style={styles.title}>
                        <Text style={styles.text}>Mã: {item.code}</Text>
                        <Text style={styles.text}>Tên: {item.name}</Text>
                        <Text style={styles.text}>Giá: {item.price} VNĐ</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                ></FlatList>
              </ScrollView>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    </View>
  );
}
export default DetailDanhTrai;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  contentCTN: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
  },
  font: { fontWeight: "normal", fontSize: 14 },
  content: { fontSize: 14 },
  ctntext: { fontSize: 16, marginTop: "2%" },
  textDL: { fontSize: 16, fontWeight: "bold" },
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
  title: { paddingHorizontal: "2%", paddingBottom: "2%"  },
  text: { fontWeight: "bold",color:'#118F3E' },
});
