import React from 'react';
import {ScrollView} from 'react-native';
import {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';
import '../../../../../FirebaseConfig';
import '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const PoliceStationSignup = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [addressline, setAddressLine] = useState('');
  const [mobile, setMobile] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);

  const handleSignup = async () => {
    //to send police Station data into firestore
    if (fullname == '') {
      alert('Enter Full Name');
    } else if (email == '') {
      alert('Enter Email');
    } else if (password == '') {
      alert('Enter Password');
    } else if (confirmPassword == '') {
      alert('Enter Confirm Password');
    } else if (addressline == '') {
      alert('Enter Address');
    } else if (mobile == '') {
      alert('Enter Number');
    } else {
      firestore()
        .collection('Police HQ')
        .add({
          fullname: fullname,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          addressline: addressline,
          mobile: mobile,
        })
        .then(() => {
          alert('Station Registered Successfully!');
          navigation.navigate('PoliceStationLogin');
        })
        .catch(error => {
          console.error(error);
        });

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('Station is Added to Firebase!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
          console.error(error);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../../assets/signup_bg.jpeg')}>
        <ScrollView>
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Police HQ Signup</Text>
            <Text style={styles.description}>
              Please provide all required details to register
            </Text>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Station Name"
                placeholderTextColor="white"
                autoCapitalize="none"
                value={fullname}
                onChangeText={setFullname}
              />
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Station Email"
                placeholderTextColor="white"
                value={email}
                onChangeText={setEmail}
              />
              <MaterialCommunityIcons
                name="email-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Password: (Hello123#)"
                placeholderTextColor="white"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={setPassword}
              />
              <View style={styles.eyeIconContainer}>
                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}>
                  <MaterialCommunityIcons
                    name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                    size={25}
                    color={hidePassword ? 'white' : 'white'}
                  />
                </TouchableOpacity>
              </View>
              <MaterialCommunityIcons
                name="lock-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password: (Hello123#)"
                placeholderTextColor="white"
                secureTextEntry={hidePassword1}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <View style={styles.eyeIconContainer}>
                <TouchableOpacity
                  onPress={() => setHidePassword1(!hidePassword1)}>
                  <MaterialCommunityIcons
                    name={hidePassword1 ? 'eye-off-outline' : 'eye-outline'}
                    size={25}
                    color={hidePassword1 ? 'white' : 'white'}
                  />
                </TouchableOpacity>
              </View>
              <MaterialCommunityIcons
                name="lock-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Station Address"
                placeholderTextColor="white"
                value={addressline}
                onChangeText={setAddressLine}
              />
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Station Phone/Landline Number:"
                placeholderTextColor="white"
                keyboardType="numeric"
                value={mobile}
                onChangeText={setMobile}
              />
              <MaterialCommunityIcons
                name="phone-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <TouchableOpacity onPress={handleSignup} style={styles.button}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <View style={styles.extracontainer}>
              <Text style={styles.extra}>Already have an account ?</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('PoliceStationLogin')}>
                <Text style={styles.btntext}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PoliceStationSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: 'center',
    textAlign: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 30,
  },

  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },

  formContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 34,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
    width: '95%',
    marginLeft: 10,
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#EEE9DA',
  },

  description: {
    color: 'white',
    fontWeight: '400',
    marginBottom: 8,
    paddingTop: 8,
  },

  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingTop: 20,
    paddingLeft: 35,
    marginBottom: 12,
    paddingBottom: 8,
    color: 'white',
    fontWeight: '800',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: '100%',
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  icon: {
    position: 'absolute',
    top: 19,
    color: 'white',
  },

  extracontainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 5,
  },

  extra: {
    fontSize: 15,
    color: '#9DC08B',
    fontWeight: '700',
    paddingRight: 5,
    top: 10,
  },

  btn: {
    borderColor: 'green',
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  btntext: {
    fontSize: 15,
    color: '#9DC08B',
    fontWeight: '700',
    paddingRight: 5,
  },

  eyeIconContainer: {
    position: 'absolute',
    top: 20,
    left: 260,
    padding: 5,
  },

  item: {
    fontSize: 14,
  },
});
