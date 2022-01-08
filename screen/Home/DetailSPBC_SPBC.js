import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components";
import { Text } from "react-native";

const Title = styled.Text`
  color: black;
`;
function DetailProduct() {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: "stretch",
          height: 200,
          width: "auto",
          borderColor: "green",
          borderRightWidth: 1,
          margin:20,
          borderRadius:50
        }}
        source={{
          uri: item.src,
        }}
      />
      <View style={{paddingHorizontal: '3%', paddingTop: '1%'}}>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Mã sản phẩm:</Text> {item.productToken}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Tên sản phẩm:</Text> {item.name}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Giá thị trường:</Text> {item.price} \1Kg
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Loại sản phẩm:</Text> {item.name}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Nguồn gốc:</Text> {item.addressFarm}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Bảo quản:</Text> {item.preserve}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Hạn sử dụng:</Text> {item.uses}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Chứng nhận:</Text> {item.certificate}
        </Title>
        <Title style={styles.content}>
          <Text style={styles.font}>
          Thông tin khác:{'\n'} 
          </Text>
          {item.content}</Title>
      </View>
    </View>
  );
}
export default DetailProduct;
const styles = StyleSheet.create({
  container: { backgroundColor: "#FFFAFA", flex: 1 },
  font: { fontWeight: "bold",fontSize:18 },
  fontNG: { paddingBottom: "1%" },
  content: { fontSize: 14 },
  ctntext: { fontSize: 16, },
});
