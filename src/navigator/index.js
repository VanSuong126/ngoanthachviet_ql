import React, { createRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const navigationRef = createRef();

import {
  // Account
  Splash,
  Login,
  Home,
} from '~screens';

const Stack = createNativeStackNavigator();

const Navigation = ({ skipScreen }) => {
  // Xác định màn hình khởi tạo dựa trên giá trị của skipScreen
  let initialRouteName = 'skipSplash';
  if (skipScreen === 'skipSplash') {
    initialRouteName = 'dangNhap';
  } else if (skipScreen === 'skipLogin') {
    initialRouteName = 'trangChu';
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName} // Đặt màn hình khởi tạo
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {/* login*/}
        <Stack.Screen name="skipSplash" component={Splash} />
        <Stack.Screen name="dangNhap" component={Login} />
        <Stack.Screen name="trangChu" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;