import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GeneralProfile from '../../../screens/Profile/GeneralProfile/GeneralProfile';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'generalprofile',
        contentStyle: {
          marginHorizontal: 10,
        },
      }}>
      <ProfileStack.Screen name="generalprofile" component={GeneralProfile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
