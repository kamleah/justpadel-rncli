import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Community from '../../../screens/Community/Community';

const CommunityStack = createNativeStackNavigator();

const CommunityStackScreen = () => {
  return (
    <CommunityStack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'community',
        contentStyle: {
            marginHorizontal: 10,
        },
      }}>
      <CommunityStack.Screen name="community" component={Community} />
    </CommunityStack.Navigator>
  );
};

export default CommunityStackScreen;
