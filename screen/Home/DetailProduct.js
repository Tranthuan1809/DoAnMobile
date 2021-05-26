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
  const {name, src, gia, maCode, loai, nguongoc, info} = route.params.item;
  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: 'stretch',
          maxHeight: 200,
          width: 'auto',
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          borderColor: 'green',
          borderRightWidth: 1,
        }}
        source={src}
      />
      <View style={{paddingHorizontal: '3%', paddingTop: '1%'}}>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Mã sản phẩm:</Text> {maCode}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Tên sản phẩm:</Text> {name}
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Giá thị trường:</Text> {gia} \1Kg
        </Title>
        <Title style={styles.ctntext}>
          <Text style={styles.font}>Loại sản phẩm:</Text> {loai}
        </Title>
        <Title style={styles.fontNG}>
          <Text style={styles.font}>Nguồn gốc:</Text> {nguongoc}
        </Title >
        <Title style={styles.content}>Thông tin khác: {info}</Title>
      </View>
    </View>
  );
}
export default DetailProduct;
const styles = StyleSheet.create({
  container: {backgroundColor: 'green'},
  font:{fontWeight:'bold'},
  fontNG:{paddingBottom:'1%'},
  content:{fontSize:14},
  ctntext:{fontSize:16}
});
