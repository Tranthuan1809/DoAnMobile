import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components";
import { Text } from "react-native";
function DetailSPQRcode() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://agriudaethblc.azurewebsites.net/api/app/product?MaxResultCount=100"
    )
      .then((response) => response.json())
      .then((json) => setData(json.items))
      .catch((error) => console.error(error));
  }, []);
  const Title = styled.Text`
    color: white;
  `;
  const route = useRoute();
  const a = route.params.code ;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{height:0.1}}>{a}</Text>
            <View >
              {item.product.code == a ? (
                <View>
                  <Image
                    style={{
                      resizeMode: "stretch",
                      height: 200,
                      width: "auto",
                      borderBottomLeftRadius: 15,
                      borderBottomRightRadius: 15,
                      borderColor: "green",
                      borderRightWidth: 1,
                    }}
                    source={{
                      uri: `https://agriudaethblc.azurewebsites.net/UploadImages/${item.product.image}`,
                    }}
                  />
                  <View style={{ paddingHorizontal: "3%", paddingTop: "1%" }}>
                    <Title style={styles.ctntext}>
                      <Text style={styles.font}>Mã sản phẩm:</Text>{" "}
                      {item.product.code}
                    </Title>
                    <Title style={styles.ctntext}>
                      <Text style={styles.font}>Tên sản phẩm:</Text>{" "}
                      {item.product.name}
                    </Title>
                    <Title style={styles.ctntext}>
                      <Text style={styles.font}>Giá thị trường:</Text>{" "}
                      {item.product.price} \1Kg
                    </Title>
                    <Title style={styles.ctntext}>
                      <Text style={styles.font}>Loại sản phẩm:</Text>{" "}
                      {item.product.name}
                    </Title>
                    <Title style={styles.fontNG}>
                      <Text style={styles.font}>Nguồn gốc:</Text>{" "}
                      {item.product.addressFarm}
                    </Title>
                    <Title style={styles.fontNG}>
                      <Text style={styles.font}>Chứng nhận:</Text>{" "}
                      {item.product.certificate}
                    </Title>
                    <Title style={styles.fontNG}>
                      <Text style={styles.font}>Bảo quản:</Text>{" "}
                      {item.product.preserve}
                    </Title>
                    <Title style={styles.fontNG}>
                      <Text style={styles.font}>Hạn sử dụng:</Text>{" "}
                      {item.product.uses}
                    </Title>
                    <Title style={styles.content}>
                      Thông tin khác: {item.product.content}
                    </Title>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
        )}
      />
    </View>
  );
}
export default DetailSPQRcode;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "green", height: "100%" },
  font: { fontWeight: "bold" },
  fontNG: { paddingBottom: "1%" },
  content: { fontSize: 14 },
  ctntext: { fontSize: 16 },
});
