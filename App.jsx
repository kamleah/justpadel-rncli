import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import BottomTab from './src/routes/BottomTab/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn/SignIn';
import SignUp from './src/screens/SignUp/SignUp';
import {Height, Width} from './src/constants/FontSizes';
// ---
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Splash from './src/screens/Splash/Splash';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Splash />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
