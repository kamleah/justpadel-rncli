import React, {useState} from 'react';
import BottomTab from './src/routes/BottomTab/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn/SignIn';
import SignUp from './src/screens/SignUp/SignUp';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [logged, setLogged] = useState(true);
  return (
    <NavigationContainer>
      {logged ? (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          <Drawer.Screen name="JustPadelBottomTab" component={BottomTab} />
        </Drawer.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="signin" component={SignIn} />
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
