import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product from './ProductScreen';
import GetAll from './RauSach/GetspRau';
import DetailProduct from './DetailProduct'
import GetAllFruit from './RauCuQua/GetAllFruit'
import GetAllSeed from './Hat/GetAllSeed'

function ProductScreen() {
  return <Product />;
}
function GetAllScreen() {
  return <GetAll />;
}
function DetailProductScreen() {
  return <DetailProduct />;
}
function GetAllFruitScreen() {
  return <GetAllFruit />;
}
function GetAllSeedScreen() {
  return <GetAllSeed />;
}

const Stack = createStackNavigator();
function CustomProductScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        component={ProductScreen}
        name="Sản phẩm"></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor:'green'}}
        component={GetAllScreen}
        name="Sản phẩm rau sạch"></Stack.Screen>
        <Stack.Screen
        component={DetailProductScreen}
        options={{headerTintColor:'green'}}
        name="Chi tiết sản phẩm"></Stack.Screen>
        <Stack.Screen
        component={GetAllFruitScreen}
        options={{headerTintColor:'green'}}
        name="Sản phẩm củ, quả"></Stack.Screen>
        <Stack.Screen
        component={GetAllSeedScreen}
        options={{headerTintColor:'green'}}
        name="Sản phẩm hạt"></Stack.Screen>
       
    </Stack.Navigator>
  );
}

export default CustomProductScreen;
