import React from 'react';
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
import COLORS from '../../../consts/Colors';
import '../../../../../FirebaseConfig';
import '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const OICSignup = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [badge, setBadge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [addressline, setAddressLine] = useState('');
  const [cnic, setCnic] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);
  // const [hideBadge, setHideBadge] = useState(true);

  const handleSignup = async () => {
    //to send oic data into firestore
    if (fullname == '') {
      alert('Enter Full Name');
    } else if (badge == '') {
      alert('Enter Badge Number');
    } else if (email == '') {
      alert('Enter Email');
    } else if (password == '') {
      alert('Enter Password');
    } else if (confirmPassword == '') {
      alert('Enter Confirm Password');
    } else if (dob == '') {
      alert('Enter Date of Birth');
    } else if (gender == '') {
      alert('Select Gender');
    } else if (mobile == '') {
      alert('Enter Mobile Number');
    } else if (addressline == '') {
      alert('Enter Address');
    } else if (cnic == '') {
      alert('Enter CNIC');
    } else {
      firestore()
        .collection('OIC')
        .add({
          fullname: fullname,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          dob: dob,
          gender: gender,
          mobile: mobile,
          addressline: addressline,
          cnic: cnic,
        })
        .then(() => {
          alert('OIC Registered Successfully!');
          navigation.navigate('OICLogin');
        })
        .catch(error => {
          console.error(error);
        });

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('OIC is Added to Firebase!');
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
            <Text style={styles.heading}>OIC Signup</Text>
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
              <MaterialCommunityIcons
                name="account-circle-outline"
                size={30}
                style={styles.icon}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Badge No"
                placeholderTextColor="white"
                // secureTextEntry={hideBadge}
                value={badge}
                onChangeText={setBadge}
              />
              <MaterialCommunityIcons
                name="police-badge-outline"
                size={30}
                style={styles.icon}
              />
              {/* <View style={styles.eyeIconContainer}>
                <TouchableOpacity onPress={() => setHideBadge(!hideBadge)}>
                  <MaterialCommunityIcons
                    name={hideBadge ? 'eye-off-outline' : 'eye-outline'}
                    size={25}
                    color={hideBadge ? 'white' : 'white'}
                  />
                </TouchableOpacity>
              </View>
              <MaterialCommunityIcons
                name="police-badge-outline"
                size={30}
                style={styles.icon}
              /> */}
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Email: (Hello123@gmail.com)"
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
                placeholder="Date of Birth: (DD-MM-YY)"
                placeholderTextColor="white"
                keyboardType="numeric"
                value={dob}
                onChangeText={setDob}
              />
              <MaterialCommunityIcons
                name="calendar-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View
              style={{
                borderColor: '#ccc',
                top: -6,
                borderWidth: 2,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
              }}>
              <Picker
                selectedValue={gender}
                onValueChange={setGender}
                style={{
                  left: 18,
                  top: 8,
                  color: 'white',
                }}>
                <Picker.Item
                  style={styles.item}
                  label="Select gender"
                  value=""
                />
                <Picker.Item style={styles.item} label="Male" value="male" />
                <Picker.Item
                  style={styles.item}
                  label="Female"
                  value="female"
                />
              </Picker>

              <MaterialCommunityIcons
                name="gender-male"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Mobile:"
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

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Address Line"
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
                placeholder="CNIC: (XXXXX-XXXXXXX-X)"
                placeholderTextColor="white"
                keyboardType="numeric"
                value={cnic}
                onChangeText={setCnic}
              />
              <MaterialCommunityIcons
                name="id-card"
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
                onPress={() => navigation.navigate('OICLogin')}>
                <Text style={styles.btntext}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OICSignup;

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
