import React, {useEffect, useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import {View, StyleSheet, Text} from 'react-native';
import COLORS from '../consts/Colors';
import '../../../FirebaseConfig';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      const unsubscribe = auth().onAuthStateChanged(async user => {
        if (user) {
          const userRef = firestore().collection('users').doc(user.uid);
          const userDoc = await userRef.get();
          if (userDoc.exists) {
            const {role} = userDoc.data();
            switch (role) {
              case 'citizen':
                navigation.navigate('CitizenHome');
                break;
              case 'oic':
                navigation.navigate('OICHomepage');
                break;
              case 'policestation':
                navigation.navigate('PoliceStationHomepage');
                break;
              default:
                console.log('Invalid department');
            }
          } else {
            console.log('User document not found');
          }
        } else {
          navigation.navigate('Login');
        }
      });
      return unsubscribe;
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
