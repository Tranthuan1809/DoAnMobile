import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components";
import { Text } from "react-native";
import { ScrollView } from "react-native";
import Vegetable from "./vegetable";
import { FlatList } from "react-native";

const Title = styled.Text`
  color: white;
`;
function DetailDanhTrai() {
  const route = useRoute();
  const { name, src, address } = route.params.item;
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: "stretch",
          maxHeight: 170,
          width: "auto",
          borderColor: "green",
          borderRightWidth: 1,
        }}
        source={src}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <SafeAreaView style={styles.contentCTN}>
          <ScrollView>
            <View style={{ paddingTop: "4%", paddingLeft: "5%" }}>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>🏭 Tên công ty: </Text>
                <Text style={styles.textDL}>{name}</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>📌 Địa chỉ trụ sở chính: </Text>
                <Text style={styles.textDL}>{address}</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>🤵 Người ĐDPL: </Text><Text style={styles.textDL}>Phạm Hoài Tuấn</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>✅ Tình trạng hoạt động: </Text><Text style={styles.textDL}>Đang hoạt động</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>📇 Giấy phép kinh doanh: </Text><Text style={styles.textDL}>1800900</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>💱 Mã số thuế: </Text><Text style={styles.textDL}>0001212</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>📆 Ngày hoạt động: </Text><Text style={styles.textDL}>10/03/2021</Text>
              </Title>
              <Title style={styles.ctntext}>
                <Text style={styles.font}>🚩 Lĩnh vực: </Text><Text style={styles.textDL}>Bán nông sản</Text>
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
            <View style={{marginHorizontal:'1%'}}>
            <Vegetable />
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
    overflow:'hidden',
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop:20
  },
  font: { fontWeight: "bold" },
  content: { fontSize: 14 },
  ctntext: { fontSize: 16, marginTop: "2%" },
  textDL: { fontSize: 14 },
});
