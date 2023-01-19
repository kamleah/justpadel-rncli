import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  black,
  borderColor,
  borderColor3,
  mainColor,
} from '../../constants/Colors';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import appStyles from '../../Style/Style/Style';
import {LatoBold} from '../../constants/Fonts';
import CheckBox from 'react-native-check-box';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SignInStyle from '../../Style/Style/SignInStyle';

const SignIn = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState('eye-off');
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setShowPassword(!showPassword);
    setEyeIcon(eyeIcon == 'eye-off' ? 'eye' : 'eye-off');
  };

  const toggleRememberMe = () => {
    setChecked(!checked);
    if (!checked === true) {
      rememberUser();
    } else {
      forgetUser();
    }
  };

  const forgetUser = async () => {
    try {
      await AsyncStorage.removeItem('@rememberMe');
    } catch (error) {
      console.log('Forget User Error: ', error);
    }
  };

  const rememberUser = async () => {
    try {
      const emailValue = await getValues('email');
      await AsyncStorage.setItem('@rememberMe', emailValue);
    } catch (error) {
      console.log('Remember User Error: ', error);
    }
  };

  const RedirectSignUp = () => {
    navigation.navigate('signup');
  };

  const GoogleSignIn = async () => {
    console.log('google sign in called');
  };

  const FacebookSignIn = async () => {
    console.log('facebook sign in called');
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
        <Text style={SignInStyle.header}>Sign In</Text>
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

      <View style={SignInStyle.rememberme_container}>
        <View style={SignInStyle.rememberme_ccheckbox}>
          <CheckBox
            onClick={toggleRememberMe}
            isChecked={checked}
            checkBoxColor={mainColor}
            uncheckedCheckBoxColor={borderColor}
          />

          <Text style={SignInStyle.rememberme_text}>Remember Me</Text>
        </View>

        <View>
          <Text
            style={SignInStyle.forgetPassword}
            onPress={() => forgotPassword()}>
            Forgot Password ?
          </Text>
        </View>
      </View>

      <View style={SignInStyle.btnview}>
        <TouchableOpacity style={SignInStyle.button}>
          <Text style={SignInStyle.signUpText}>Sign In</Text>
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

      <View style={SignInStyle.logInBox}>
        <Text style={SignInStyle.loginText}>New to Just Padel?</Text>
        <Text style={SignInStyle.login} onPress={RedirectSignUp}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
