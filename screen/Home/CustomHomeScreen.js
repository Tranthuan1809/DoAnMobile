import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TrangChu from './Trangchu';
import DetailProduct from './DetailProduct';
import GetAll from './GetallSPnew';
import GetallSPBC from './GetAllSPBC';
import QRcode from '../QRcode/QRCode'
import DetailSPBC from '../SanPham/DetailProduct'

function TrangchuScreen() {
  return <TrangChu />;
}
function DetailProductScreen() {
  return <DetailProduct />;
}
function GetAllScreen() {
  return <GetAll />;
}
function GetallSPBCScreen() {
  return <GetallSPBC />;
}
function QRcodeScreen() {
  return <QRcode />;
}
function DetailSPBCScreen() {
  return <DetailSPBC />;
}

const Stack = createStackNavigator();
function CustomHomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        component={TrangchuScreen}
        name="Trang chu"></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'green' ,headerBackTitleVisible: false}}
        component={DetailProductScreen}
        name="Chi tiết sản phẩm"></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'green' ,headerBackTitleVisible: false}}
        component={GetAllScreen}
        name="Sản phẩm mới"></Stack.Screen>
      <Stack.Screen
        options={{headerTintColor: 'green' ,headerBackTitleVisible: false}}
        component={GetallSPBCScreen}
        name="Sản phẩm bán chạy"></Stack.Screen>
        <Stack.Screen
        options={{headerTintColor: 'green' ,headerBackTitleVisible: false}}
        component={QRcodeScreen}
        name="QRcode"></Stack.Screen>
         <Stack.Screen
        options={{headerTintColor: 'green' ,headerBackTitleVisible: false}}
        component={DetailSPBCScreen}
        name="Chi tiết SPBC"></Stack.Screen>
    </Stack.Navigator>
  );
}

export default CustomHomeScreen;
