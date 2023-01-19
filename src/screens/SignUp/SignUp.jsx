import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {black, borderColor, mainColor} from '../../constants/Colors';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import appStyles from '../../Style/Style/Style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInStyle from '../../Style/Style/SignInStyle';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye-off');

  const toggleSwitch = () => {
    setShowPassword(!showPassword);
    setEyeIcon(eyeIcon == 'eye-off' ? 'eye' : 'eye-off');
  };

  const GoogleSignIn = async () => {
    console.log('google sign up called');
  };

  const FacebookSignIn = async () => {
    console.log('facebook sign up called');
  };

  return (
    <SafeAreaView style={appStyles.commonMargin}>
      <TouchableOpacity activeOpacity={0.7}>
        <Icon
          name="chevron-left"
          size={25}
          onPress={() => navigation.goBack()}
          color={black}
          style={SignInStyle.icon_header}
        />
      </TouchableOpacity>

      <View>
        <Text style={SignInStyle.header}>Sign Up</Text>
      </View>

      <TextInput
        activeOutlineColor={mainColor}
        label="Email Address / Phone No."
        placeholder="e.g tyler.stewart@gmail.com"
        placeholderTextColor={borderColor}
        mode="outlined"
        autoCapitalize="none"
        selectionColor={mainColor}
        outlineColor={borderColor}
        style={SignInStyle.mt_15}
      />

      <TextInput
        label="Password"
        placeholder="•••••••••••"
        placeholderTextColor={borderColor}
        mode="outlined"
        autoCapitalize="none"
        secureTextEntry={showPassword}
        selectionColor={mainColor}
        activeOutlineColor={mainColor}
        outlineColor={borderColor}
        right={<TextInput.Icon icon={eyeIcon} onPress={() => toggleSwitch()} />}
        style={SignInStyle.mt_15}
      />

      <View style={SignInStyle.btnview}>
        <TouchableOpacity style={SignInStyle.button}>
          <Text style={SignInStyle.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
          marginBottom: 20,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: borderColor}}></View>
        <View>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              color: borderColor,
            }}>
            OR
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: borderColor}}></View>
      </View>

      <View style={SignInStyle.btnview}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={FacebookSignIn}
          style={SignInStyle.fbSocialLogin}
          mode="contained"
          backgroundColor="#3B599C">
          <Icon
            name="facebook-f"
            size={17}
            style={{paddingHorizontal: 7}}
            color="white"
          />
          <Text style={SignInStyle.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={SignInStyle.btnview}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={GoogleSignIn}
          style={SignInStyle.ggSocialLogin}
          mode="contained"
          backgroundColor="#DE422F">
          <Icon
            name="google"
            size={17}
            style={{paddingHorizontal: 7}}
            color="white"
          />
          <Text style={SignInStyle.socialText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
