import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {mainColor} from '../../constants/Colors';
import { LatoBlack, LatoBlackItalic } from '../../constants/Fonts';

const Header = () => {
  const [pressedBack, setPressedBack] = useState(false);
  return (
    <View
      style={{
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPressIn={() => setPressedBack(true)}
          onPressOut={() => setPressedBack(false)}
          style={{
            paddingVertical: 7,
            paddingHorizontal: 10,
            borderRadius: 7,
            backgroundColor: pressedBack ? '#ccc' : '#fff',
          }}>
          <FontAwesome name="chevron-left" size={20} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}></View>
      <View style={{flex: 3}}>
        <Text style={{fontFamily:LatoBlackItalic}}>Just Padel Mina Rashid</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
