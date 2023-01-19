import {
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import logo from '../../../assets/images/index.png';
import appStyles from '../../Style/Style/Style';

const EntryScreen = ({navigation}) => {
  const navigateToSignIn = () => {
    navigation.navigate('signin');
  };

  const navigateToSignUp = () => {
    navigation.navigate('signup');
  };

  return (
    <SafeAreaView style={appStyles.flex1}>
      <ImageBackground
        source={logo}
        style={appStyles.es_bg_image}
        resizeMode="cover">
        <Image
          style={appStyles.es_image}
          source={require('../../../assets/images/small-logo-wb.png')}
        />
        <Text
          style={appStyles.es_title}>
          Your Padel Community App
        </Text>

        <TouchableOpacity
          activeOpacity={0.9}
          style={appStyles.es_button} onPress={navigateToSignUp}>
          <Text
            style={appStyles.es_button_text}>
            Let's Padel!
          </Text>
        </TouchableOpacity>
        <Text
          style={appStyles.es_bottom_text}
          onPress={navigateToSignIn}>
          Already a Padelholic?{' '}
          <Text style={appStyles.text_warning} onPress={navigateToSignIn}>
            Login
          </Text>
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EntryScreen;
