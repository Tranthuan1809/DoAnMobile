import React from 'react';
import {
  FlatList,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ListSP = [
  {
    id: 1,
    maCode:'0312',
    src: require('../../assets/can.jpg'),
    name: 'Rau cần',
    gia: '1000$',
  },
  {
    id: 2,
    src: require('../../assets/dao.jpg'),
    name: 'Đào',
    gia: '1100$',
  },
  {
    id: 3,
    src: require('../../assets/sa-lach.jpg'),
    name: 'Rau xà lách',
    gia: '1200$',
  },
  {
    id: 4,
    src: require('../../assets/mia.jpg'),
    name: 'Mía',
    gia: '1300$',
  },
];
export default function Product() {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true}>
      <FlatList
        numColumns={4}
        data={ListSP}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Chi tiết sản phẩm',{item})}
            activeOpacity={0.5}
            style={style.productStyle}>
            <Image
              style={{
                resizeMode: 'stretch',
                maxHeight: 100,
                width: 'auto',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginVertical: 2,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              source={item.src}></Image>
            <View style={style.title}>
              <Text style={style.text}>Mã : {item.maCode}</Text>
              <Text style={style.text}>Tên: {item.name}</Text>
              <Text style={style.text}>Giá : {item.gia} \1Kg</Text>
            </View>
          </TouchableOpacity>
        )}></FlatList>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  productStyle: {
    flex:1,
    width: 170,
    maxHeight: 166,
    marginHorizontal: 6,
    backgroundColor: '#338f38',
    borderStyle: 'solid',
    borderColor: '#81F781',
    borderWidth: 1,
    borderRadius: 7,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    elevation: 5,
    marginBottom: 10,
  },
  title:{paddingHorizontal:'2%'},
  text:{color:'white',fontWeight:'bold'}
});
