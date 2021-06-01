import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {useNavigation} from '@react-navigation/native'

const ListSP = [
  {
    id: 1,
    src: require('../../../assets/sa-lach.jpg'),
    name: 'Rau xà lách',
    gia: '1000$',
  },
  {
    id: 2,
    src: require('../../../assets/toi.jpg'),
    name: 'Rau ngò',
    gia: '1100$',
  },
  {
    id: 3,
    src: require('../../../assets/hanh-tay.jpg'),
    name: 'Diếp cá',
    gia: '1200$',
  },
  {
    id: 4,
    src: require('../../../assets/ngo.png'),
    name: 'Rau cần',
    gia: '1300$',
  },
  {
    id: 5,
    src: require('../../../assets/sa-lach.jpg'),
    name: 'Diếp cá',
    gia: '1200$',
  },
  {
    id: 6,
    src: require('../../../assets/san-nuoc.jpg'),
    name: 'Rau cần',
    gia: '1300$',
  },
  {
    id: 7,
    src: require('../../../assets/sa-lach.jpg'),
    name: 'Diếp cá',
    gia: '1200$',
  },
  {
    id: 8,
    src: require('../../../assets/san-nuoc.jpg'),
    name: 'Rau cần',
    gia: '1300$',
  },
];
function Getall  () {
const navigation = useNavigation();

  return (
    <SafeAreaView style={{backgroundColor:'#338f38',paddingVertical:5,flex:1}}>
      <FlatList
        numColumns={2}
        data={ListSP}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.container}
          onPress={() => navigation.navigate("Chi tiết sản phẩm",{item})}
          >
            <Image source={item.src} style={styles.image}></Image>
            <Text>{item.name}</Text>
            <Text>{item.gia}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
export default Getall;
const styles = StyleSheet.create({
    container:{
      width:'48%',
      height:160,
      backgroundColor:'white',
      margin:'1%',
      borderRadius:10
    },
    image:{maxHeight:100,width:'auto',margin:2,borderRadius:10}
});
