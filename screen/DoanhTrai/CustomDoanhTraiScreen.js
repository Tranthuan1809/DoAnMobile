import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DoanhTrai from './Doanhtrai'
import DetailDanhTrai from './DetailDanhTrai'
import DetailProduct from '../Home/DetailSPBC_SPBC'

function DoanhTraiScreen() {
  return <DoanhTrai />;
}
function DetailDanhTraiScreen() {
  return <DetailDanhTrai />;
}
function DetailProductScreen() {
  return <DetailProduct />;
}

const Stack = createStackNavigator();
function CustomProductScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        component={DoanhTraiScreen}
        name="Doanh trại"></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor:'green' ,headerBackTitleVisible: false}}
        component={DetailDanhTraiScreen}
        name="Thông tin công ty"></Stack.Screen>
         <Stack.Screen
        options={{headerTintColor:'green' ,headerBackTitleVisible: false}}
        component={DetailProductScreen}
        name="Chi tiết sản phẩm"></Stack.Screen>
    </Stack.Navigator>
  );
}

export default CustomProductScreen;
