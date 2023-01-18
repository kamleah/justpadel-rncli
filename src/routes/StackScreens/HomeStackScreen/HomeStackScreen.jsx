import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../../screens/Home/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'home',
        contentStyle: {
          marginHorizontal: 10,
        },
      }}>
      <HomeStack.Screen name="home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
