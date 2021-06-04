import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components";
import { Text } from "react-native";

const Title = styled.Text`
  color: white;
`;
function DetailProduct() {
  const route = useRoute();
  const { name, qrCode, price } = route.params.item.product;
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: "stretch",
          height:200,
          width: "auto",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          borderColor: "green",
          borderRightWidth: 1,
        }}
        source={{
          uri: "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-600x600.jpg",
        }}
      />
      <View style={{ paddingHorizontal: "3%", paddingTop: "1%" }}>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Mã sản phẩm:</Text> {qrCode}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Tên sản phẩm:</Text> {name}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Giá thị trường:</Text> {price} \1Kg
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Loại sản phẩm:</Text> {route.params.item.category.name}
        </Title>
        {/* <Title style={styles.fontNG}>
          <Text style={styles.font}>Nguồn gốc:</Text> {nguongoc}
        </Title >
        <Title style={styles.content}>Thông tin khác: {info}</Title> */}
      </View>
    </View>
  );
}
export default DetailProduct;
const styles = StyleSheet.create({
  container: { backgroundColor: "#338f38", flex:1 },
  font: { fontWeight: "bold" },
  fontNG: { paddingBottom: "1%" },
  content: { fontSize: 14 },
  ctntext: { fontSize: 16 },
});
