import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CourtDetail from '../../../screens/Book/CourtDetail/CourtDetail';

const BookStack = createNativeStackNavigator();

const BookStackScreen = () => {
  return (
    <BookStack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'courtdetail',
        contentStyle: {
          marginHorizontal: 10,
        },
      }}>
      <BookStack.Screen name="courtdetail" component={CourtDetail} />
    </BookStack.Navigator>
  );
};

export default BookStackScreen;
