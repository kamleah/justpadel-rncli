import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chat from '../../../screens/Chat/Chat/Chat';

const ChatStack = createNativeStackNavigator();

const ChatStackScreen = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'chat',
        contentStyle: {
            marginHorizontal: 10,
        },
      }}>
      <ChatStack.Screen name="chat" component={Chat} />
    </ChatStack.Navigator>
  );
};

export default ChatStackScreen;
