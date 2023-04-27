import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import '../../../../FirebaseConfig';
import firebase from '@react-native-firebase/app';
import 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

const CitizenHome = ({navigation}) => {
  const [fullname, setfullName] = useState('');

  const fetchUser = async () => {
    const user = firebase.auth().currentUser;
    if (user) {
      const userQuery = firebase
        .firestore()
        .collection('Citizen')
        .where('email', '==', user.email);
      const userDoc = await userQuery.get();
      if (!userDoc.empty) {
        const userData = userDoc.docs[0].data();
        setfullName(userData.fullname);
      }
    }
  };

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      fetchUser();
    }
  });

  return (
    <View>
      <View>
        <Text style={styles.Uppertitle}>
          Welcome {'\n'}
          {'\n'} {fullname}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('CitizenComplaints')}
        style={styles.card}>
        <View>
          <Image
            source={require('../../../assets/complaint.png')}
            style={styles.Image}
          />
          <Text style={styles.title}>Complaints</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CitizenHome;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    width: '45%',
    height: '42%',
    top: 100,
    left: 10,
    padding: 20,
  },

  Uppertitle: {
    fontSize: 24,
    fontWeight: 'bold',
    top: 40,
    textAlign: 'center',
    color: 'black',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: 'black',
  },

  Image: {
    resizeMode: 'contain',
    width: '60%',
    height: '60%',
    left: 20,
  },
});
