import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import { LatoBlack } from '../../constants/Fonts';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <Text style={{fontFamily:LatoBlack}}>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
