import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

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
import COLORS from '../consts/Colors';
import '../../../FirebaseConfig';
import '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Signup = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cnic, setCnic] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);

  const handleSignup = async () => {
    //to send user data into firestore

    firestore()
      .collection('user')
      .add({
        fullname: fullname,
        email: email,
        cnic: cnic,
      })
      .then(() => {
        alert('User Registered Successfully!');
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error(error);
      });

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User is Added to Firebase!');
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
  };

 

  const isValidInput = () => {
    const fullNamePattern = /^[a-zA-Z\s]*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
    const cnicPattern = /^(\d{5})-(\d{7})-(\d{1})$/gm;

    const isFullNameValid = fullNamePattern.test(fullname);
    const isEmailValid = emailPattern.test(email);
    const isPasswordValid = passwordPattern.test(password);
    const isConfirmPasswordValid = confirmPassword === password;
    const isCnicValid = cnicPattern.test(cnic);

    return (
      isFullNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isCnicValid
    );
  };

  const validateFullname = () => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!fullname.match(regex)) {
      return 'Special Characters Not Allowed';
    }
    return '';
  };
  const fullnameError = validateFullname();

  const handleEmailChange = value => {
    setEmail(value);
  };
  const validateEmail = () => {
    if (!email) {
      return '';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };
  const emailError = validateEmail();

  const handlePasswordChange = value => {
    setPassword(value);
  };
  const validatePassword = () => {
    if (!password) {
      return '';
    }
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return 'Invalid Password Format';
    }
    return '';
  };
  const passwordError = validatePassword();

  const handleConfirmPasswordChange = value => {
    setConfirmPassword(value);
  };
  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return '';
  };
  const confirmPasswordError = validateConfirmPassword();

  const handleCnicChange = value => {
    setCnic(value);
  };
  const validateCnic = () => {
    if (!cnic) {
      return '';
    }
    const cnicRegex = /^(\d{5})-(\d{7})-(\d{1})$/gm;
    if (!cnicRegex.test(cnic)) {
      return 'Invalid CNIC Format';
    }
    return '';
  };
  const cnicError = validateCnic();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/signup_bg.jpeg')}>
        <ScrollView>
          <View style={styles.formContainer}>
            <Text style={styles.heading}>Signup</Text>
            <Text style={styles.description}>
              Please provide all required details to register
            </Text>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="white"
                autoCapitalize="none"
                value={fullname}
                onChangeText={setFullname}
              />
              {fullnameError ? (
                <Text style={styles.validationerror}>{fullnameError}</Text>
              ) : null}
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Email: (Hello@gmail.com)"
                placeholderTextColor="white"
                value={email}
                onChangeText={handleEmailChange}
              />
              {emailError ? (
                <Text style={styles.validationerror}>{emailError}</Text>
              ) : null}
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
                onChangeText={handlePasswordChange}
              />
              {passwordError ? (
                <Text style={styles.validationerror}>{passwordError}</Text>
              ) : null}
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
                onChangeText={handleConfirmPasswordChange}
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
              {confirmPasswordError ? (
                <Text style={styles.validationerror}>
                  {confirmPasswordError}
                </Text>
              ) : null}
              <MaterialCommunityIcons
                name="lock-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="CNIC: (XXXXX-XXXXXXX-X)"
                placeholderTextColor="white"
                value={cnic}
                onChangeText={handleCnicChange}
              />
              {cnicError ? (
                <Text style={styles.validationerror}>{cnicError}</Text>
              ) : null}
              <MaterialCommunityIcons
                name="id-card"
                size={30}
                style={styles.icon}
              />
            </View>

            <TouchableOpacity
              disabled={!isValidInput()}
              onPress={handleSignup}
              style={[
                styles.button,
                {backgroundColor: isValidInput() ? COLORS.primary : '#ccc'},
              ]}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <View style={styles.extracontainer}>
              <Text style={styles.extra}>Already have an account ?</Text>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btntext}>Login</Text>
              </TouchableOpacity>
            </View>
          
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;

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

  imgContainer: {},

  img: {
    width: 110,
    height: 110,
    top: 16,
    borderRadius: 55,
    borderColor: COLORS.primary,
    borderWidth: 4,
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
    // backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    top: 20,
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
    paddingTop: 30,
    paddingLeft: 5,
  },

  extra: {
    fontSize: 15,
    color: 'black',
    fontWeight: '700',
    paddingRight: 5,
    top: 20,
  },

  btn: {
    borderColor: 'green',
    backgroundColor: 'black',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    marginTop: 10,
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

  validationerror: {
    color: 'red',
    position: 'absolute',
    top: 60,
    fontWeight: '700',
    fontSize: 13,
  },
});
