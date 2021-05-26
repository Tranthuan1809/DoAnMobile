import React from 'react';
import { FlatList,Text, Image, ScrollView,StyleSheet,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

const ListSP = [
    {
      id: 1,
      src: require('../../assets/sa-lach.jpg'),
      name: 'Rau xà lách',
      gia: '1000$',
    },
    {
      id: 2,
      src: require('../../assets/ngo.png'),
      name: 'Rau ngò',
      gia: '1100$',
    },
    {
      id: 3,
      src: require('../../assets/diep-ca.jpg'),
      name: 'Diếp cá',
      gia: '1200$',
    },
    {
      id: 4,
      src: require('../../assets/can.jpg'),
      name: 'Rau cần',
      gia: '1300$',
    },
  ];
export default function Product () {
  const navigation=useNavigation();
    return (
      <ScrollView style={{backgroundColor:'#338f38',paddingVertical:10}} horizontal={true}>
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
                  resizeMode:'stretch',
                  maxHeight: 100,
                  width:'auto',
                  marginHorizontal: 2,
                  marginVertical: 2,
                }}
                source={item.src}></Image>
              <Text>{item.name}</Text>
              <Text>{item.gia}</Text>
            </TouchableOpacity>
          )}></FlatList>
      </ScrollView>
    );
}
const style = StyleSheet.create({
    productStyle: {
      width: 180,
      height: 160,
      marginHorizontal: 3,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray',
      borderRadius: 7,
      backgroundColor:'white',
    },
  });
