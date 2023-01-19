import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {LatoBlack} from '../../constants/Fonts';
import { black, red } from '../../constants/Colors';
import { useSelector } from 'react-redux';

const Home = () => {
  const LoggedUser = useSelector((state) => state.loginReducer.logged);
  return (
    <>
      <Header title={"Just Padel-Mina Rashid"} />
      <ScrollView>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:black}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
        <Text style={{fontFamily: LatoBlack, color:red}}>Home</Text>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
