import React, {useEffect, useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
import COLORS from '../consts/Colors';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('CitizenPortal');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image_bg}
        source={require('../../assets/bg.jpg')}>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require('../../assets/logo.jpg')}
          />
          <Text style={styles.heading}>E-Citizen Portal</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  heading: {
    fontSize: 35,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: '800',
  },

  image: {
    width: 150,
    height: 150,
  },

  image_bg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
});

export default Splash;
