import React from 'react';
import {View, Text} from 'react-native';
import {mainColor, tabIconNormal} from '../../constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';

import HomeStackScreen from '../StackScreens/HomeStackScreen/HomeStackScreen';
import BookStackScreen from '../StackScreens/BookStackScreen/BookStackScreen';
import CommunityStackScreen from '../StackScreens/CommunityStackScreen/CommunityStackScreen';
import ChatStackScreen from '../StackScreens/ChatStackScreen/ChatStackScreen';
import ProfileStackScreen from '../StackScreens/ProfileStackScreen/ProfileStackScreen';

import HOMEICON from '../../../assets/icons/icon_home.svg';
import HOMEICONACTIVE from '../../../assets/icons/icon_home_active.svg';
import BOOKING_ICON from '../../../assets/icons/icon_booking.svg';
import BOOKING_ICON_ACTIVE from '../../../assets/icons/icon_booking_active.svg';
import PADELGRAM_ICON from '../../../assets/icons/icon_padelgram.svg';
import PADELGRAM_ICON_ACTIVE from '../../../assets/icons/icon_padelgram_active.svg';
import PROFILE_ICON from '../../../assets/icons/icon_profile.svg';
import PROFILE_ICON_ACTIVE from '../../../assets/icons/icon_profile_active.svg';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="courtdetail"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        enableScreens={false}
        options={{
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({focused}) => (
            <>
              {focused ? <HOMEICONACTIVE /> : <HOMEICON />}
              <Text style={{marginTop: 5, color: 'black'}}>Home</Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Book"
        component={BookStackScreen}
        options={{
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({focused}) => (
            <>
              {focused ? <BOOKING_ICON_ACTIVE /> : <BOOKING_ICON />}
              <Text style={{marginTop: 5, color: 'black'}}>Book</Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={CommunityStackScreen}
        options={{
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({focused}) => (
            <>
              {focused ? <PADELGRAM_ICON_ACTIVE /> : <PADELGRAM_ICON />}
              <Text style={{marginTop: 5, color: 'black'}}>Community</Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Fontisto
                name="hipchat"
                size={25}
                color={focused ? mainColor : tabIconNormal}
              />
              <Text style={{marginTop: 5, color: 'black'}}>Chat</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarStyle: {
            height: 60,
          },
          tabBarIcon: ({focused}) => (
            <>
              {focused ? <PROFILE_ICON_ACTIVE /> : <PROFILE_ICON />}
              <Text style={{marginTop: 5, color: 'black'}}>Profile</Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
