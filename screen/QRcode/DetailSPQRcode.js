import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components";
import { Text } from "react-native";

const data = [
  {
    maCode: 1,
    id: 1,
    name: "Xà lách",
    src: "https://cdn.caythuocdangian.com/2019/03/rau-xa-lach-carol.jpg",
    price: 20000,
    category: "Rau",
    code: "vgt001",
    nguongoc: "Nông trại Vinafarm",
    baoquan: "Bỏ ngăn mát",
    hsd: "Sử dụng trong vòng 15 ngày",
    content:
      "Theo nghiên cứu của khoa học hiện đại, trong 100 gam xà lách có khoảng 2,2 gam carbohydrate, 1,2 gam chất xơ, 90 gam nước, 166 microgram vitamin A, 73 microgram folate",
  },
  {
    maCode: 2,
    id: 2,
    name: "Rau má",
    src: "https://gonhub.com/wp-content/uploads/2018/10/uong-nuoc-rau-ma-moi-ngay-co-tot-khong-20180804-08-2018-211248.jpg",
    price: 25000,
    category: "Rau",
    code: "vgt002",
    nguongoc: "Nông trại Xanh",
    baoquan: "Bỏ ngăn mát",
    hsd: "Sử dụng trong vòng 21 ngày",
    content:
      "Theo nghiên cứu của khoa học hiện đại, trong 100 gam xà lách có khoảng 2,2 gam carbohydrate, 1,2 gam chất xơ, 90 gam nước, 166 microgram vitamin A, 73 microgram folate",
  },
  {
    maCode: 3,

    id: 3,
    name: "Rau ngò",
    src: "https://thucphamdongxanh.com/wp-content/uploads/2019/09/luu-y-khi-dung-ngo-ri.jpg",
    price: 10000,
    category: "Rau",
    code: "vgt003",
    nguongoc: "Nông trại Rau sạch",
    baoquan: "Bỏ ngăn mát",
    hsd: "Sử dụng trong vòng 17 ngày",
    content:
      "Theo nghiên cứu của khoa học hiện đại, trong 100 gam xà lách có khoảng 2,2 gam carbohydrate, 1,2 gam chất xơ, 90 gam nước, 166 microgram vitamin A, 73 microgram folate",
  },
  {
    maCode: 4,

    id: 4,
    name: "Diếp cá",
    src: "https://vinmec-prod.s3.amazonaws.com/images/20201118_142647_218113_rau-diep-ca-chua-nh.max-1800x1800.jpg",
    price: 14000,
    category: "Rau",
    code: "vgt004",
    nguongoc: "Nông trại Farm Logo",
    baoquan: "Bỏ ngăn mát",
    hsd: "Sử dụng trong vòng 11 ngày",
    content:
      "Theo nghiên cứu của khoa học hiện đại, trong 100 gam xà lách có khoảng 2,2 gam carbohydrate, 1,2 gam chất xơ, 90 gam nước, 166 microgram vitamin A, 73 microgram folate",
  },
  {
    maCode: 5,
    id: 5,
    name: "Rau cần",
    src: "https://hachi.com.vn/wp-content/uploads/2017/07/rau-can-1024x716.jpg",
    price: 13000,
    category: "Rau",
    code: "vgt005",
    nguongoc: "Nông trại ViMin",
    baoquan: "Bỏ ngăn mát",
    hsd: "Sử dụng trong vòng 16 ngày",
    content:
      "Theo nghiên cứu của khoa học hiện đại, trong 100 gam xà lách có khoảng 2,2 gam carbohydrate, 1,2 gam chất xơ, 90 gam nước, 166 microgram vitamin A, 73 microgram folate",
  },
];
const Title = styled.Text`
  color: white;
`;
function DetailSPQRcode() {
  const route = useRoute();
  const a = route.params.name;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View>
          {item.maCode == a ? (
            <View style={styles.container}>
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
                source={{ uri: item.src }}
              />
              <View style={{ paddingHorizontal: "3%", paddingTop: "1%" }}>
                <Title style={styles.ctntext}>
                  <Text style={styles.font}>Mã sản phẩm:</Text> {item.code}
                </Title>
                <Title style={styles.ctntext}>
                  <Text style={styles.font}>Tên sản phẩm:</Text> {item.name}
                </Title>
                <Title style={styles.ctntext}>
                  <Text style={styles.font}>Giá thị trường:</Text> {item.price}{" "}
                  \1Kg
                </Title>
                <Title style={styles.ctntext}>
                  <Text style={styles.font}>Loại sản phẩm:</Text> {item.name}
                </Title>
                <Title style={styles.fontNG}>
                  <Text style={styles.font}>Nguồn gốc:</Text> {item.addressFarm}
                </Title>
                <Title style={styles.fontNG}>
                  <Text style={styles.font}>Chứng nhận:</Text>{" "}
                  {item.certificate}
                </Title>
                <Title style={styles.content}>
                  Thông tin khác: {item.content}
                </Title>
              </View>
            </View>
          ) : null}
        </View>
      )}
    />
  );
}
export default DetailSPQRcode;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "green" },
  font: { fontWeight: "bold" },
  fontNG: { paddingBottom: "1%" },
  content: { fontSize: 14 },
  ctntext: { fontSize: 16 },
});
