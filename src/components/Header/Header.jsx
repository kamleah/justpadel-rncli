import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {backIcon, black, mainColor, white} from '../../constants/Colors';
import {LatoBold} from '../../constants/Fonts';
import {TitleFontSize, Width} from '../../constants/FontSizes';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const [pressedBack, setPressedBack] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <StatusBar
        animated={true}
        backgroundColor={white}
        barStyle={'dark-content'}
        showHideTransition={'fade'}
      />
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPressIn={() => setPressedBack(true)}
          onPressOut={() => setPressedBack(false)}
          onPress={() => navigation.goBack()}
          style={[
            styles.icon,
            {backgroundColor: pressedBack ? mainColor : white},
          ]}>
          <FontAwesome name="chevron-left" size={20} color={backIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: -20,
    paddingHorizontal: 20,
    backgroundColor: white,
    
  },
  icon: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    width: Width/10,
  },
  text: {
    fontFamily: LatoBold,
    color: black,
    fontSize: TitleFontSize,
    width: Width/1.1,
    textAlign: 'center',
  },
});
