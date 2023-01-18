import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SignIn = ({navigation}) => {
  return (
    <View>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("signup")}><Text>Clikc To Redirect Sign Up</Text></TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
