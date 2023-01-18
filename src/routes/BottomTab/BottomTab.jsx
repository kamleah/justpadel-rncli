import React from 'react';
import {View, Text} from 'react-native';
import {mainColor} from '../../constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import HomeStackScreen from '../StackScreens/HomeStackScreen/HomeStackScreen';
import BookStackScreen from '../StackScreens/BookStackScreen/BookStackScreen';
import CommunityStackScreen from '../StackScreens/CommunityStackScreen/CommunityStackScreen';
import ChatStackScreen from '../StackScreens/ChatStackScreen/ChatStackScreen';
import ProfileStackScreen from '../StackScreens/ProfileStackScreen/ProfileStackScreen';

import SVGIconHome from '../../../assets/icons/icon_home.svg';
import SVGIconHomeActive from '../../../assets/icons/icon_home.svg';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 10,
          height: 60,
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        enableScreens={false}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <EntypoIcons name="home" size={25} color={focused && mainColor} />
              <Text style={{marginTop: 5}}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Book"
        component={BookStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="book-settings"
                size={25}
                color={focused && mainColor}
              />
              <Text style={{marginTop: 5}}>Book</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={CommunityStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name="md-tennisball"
                size={25}
                color={focused && mainColor}
              />
              <Text style={{marginTop: 5}}>Community</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Fontisto name="hipchat" size={25} color={focused && mainColor} />
              <Text style={{marginTop: 5}}>Chat</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Ionicons name="person" size={25} color={focused && mainColor} />
              <Text style={{marginTop: 5}}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
