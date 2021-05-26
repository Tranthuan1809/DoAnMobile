import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DoanhTrai from './Doanhtrai'
import DetailDanhTrai from './DetailDanhTrai'


function DoanhTraiScreen() {
  return <DoanhTrai />;
}
function DetailDanhTraiScreen() {
  return <DetailDanhTrai />;
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
    </Stack.Navigator>
  );
}

export default CustomProductScreen;
