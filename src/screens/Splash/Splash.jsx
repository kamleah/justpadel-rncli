import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Height, Width} from '../../constants/FontSizes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import BottomTab from '../../routes/BottomTab/BottomTab';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import EntryScreen from '../EntryScreen/EntryScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Splash = () => {
  const LoggedUser = useSelector(state => state.loginReducer.logged);
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 1000);
  }, []);

  return (
    <>
      {isSplash ? (
        <Image
          source={require('../../../assets/images/splash.png')}
          style={{height: Height, width: Width + 20}}
        />
      ) : (
        <>
          {LoggedUser ? (
            <Drawer.Navigator screenOptions={{headerShown: false}}>
              <Drawer.Screen name="JustPadelBottomTab" component={BottomTab} />
            </Drawer.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="entryscreen" component={EntryScreen} />  
              <Stack.Screen name="signin" component={SignIn} />
              <Stack.Screen name="signup" component={SignUp} />
            </Stack.Navigator>
          )}
        </>
      )}
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({});
