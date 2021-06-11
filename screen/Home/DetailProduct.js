import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import styled from 'styled-components';
import {Text} from 'react-native';

const Title = styled.Text`
  color: white;
`;
function DetailProduct() {
  const route = useRoute();
  const {product} = route.params.item;
  const {category} = route.params.item;
  return (
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
        source={{uri:`https://agriudaethblc.azurewebsites.net/UploadImages/${product.image}`}}
      />
      <View style={{paddingHorizontal: '3%', paddingTop: '1%'}}>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Mã sản phẩm:</Text> {product.productToken}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Tên sản phẩm:</Text> {product.name}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Giá thị trường:</Text> {product.price} \1Kg
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Loại sản phẩm:</Text> {category.name}
        </Title>
        <Title style={styles.fontNG}>
          <Text style={styles.font}>Nguồn gốc:</Text> {product.addressFarm}
        </Title>
        <Title style={styles.fontNG}>
          <Text style={styles.font}>Chứng nhận:</Text> {product.certificate}
        </Title>
        <Title style={styles.content}>Thông tin khác: {product.content}</Title>
      </View>
    </View>
  );
}
export default DetailProduct;
const styles = StyleSheet.create({
  container: { backgroundColor: "green",flex:1 },
  font: { fontWeight: "bold" },
  fontNG: { paddingBottom: "1%" },
  content: { fontSize: 14 },
  ctntext: { fontSize: 16 },
});

