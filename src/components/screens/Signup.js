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
  Image,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../consts/Colors';
import ImagePicker from 'react-native-image-crop-picker';
// import imgPlaceHolder from '../../assets/defualt-Avatar.png';
import '../../../FirebaseConfig';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Picker} from '@react-native-picker/picker';
import storage from '@react-native-firebase/storage';

const Signup = ({navigation}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [cnic, setCnic] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);
  const [role, setRole] = useState('');
  const [badge, setBadge] = useState('');
  const [stationid, setStationId] = useState('');
  const [showBadgeField, setShowBadgeField] = useState(false);
  const [showStationIdField, setShowStationIdField] = useState(false);
  const [image, setImage] = useState('');

  const handleSignup = async () => {
    try {
      const authCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = authCredential.user;
      const userRef = firestore().collection('users').doc(user.uid);
      const imageRef = storage().ref().child(`users/${user.uid}/`);
      const imageBlob = await fetch(image.path).then(response =>
        response.blob(),
      );
      await imageRef.put(imageBlob);
      const imageUrl = await imageRef.getDownloadURL();
      await userRef
        .set({
          role,
          imageUrl,
          fullname,
          email,
          address,
          mobile,
          cnic,
          badge,
          stationid,
        })
        .then(() => {
          alert('User Registered Successfully');
          navigation.navigate('Login');
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImage(image);
    });
  };

  const handleRoleChange = value => {
    setRole(value);
    setShowBadgeField(value === 'oic');
    setShowStationIdField(value === 'policestation');
  };
  const handleBadgeChange = value => {
    setBadge(value);
  };
  const handleStationIdChange = value => {
    setStationId(value);
  };

  const isValidInput = () => {
    const fullNamePattern = /^[a-zA-Z\s]*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
    const addressPattern = /^[\w\s,'-]*$/;
    const mobilePattern = /^(\+92|92|0)(3\d{2}|\d{2})(\d{7})$/;
    const cnicPattern = /^(\d{5})-(\d{7})-(\d{1})$/gm;

    const isFullNameValid = fullNamePattern.test(fullname);
    const isEmailValid = emailPattern.test(email);
    const isPasswordValid = passwordPattern.test(password);
    const isConfirmPasswordValid = confirmPassword === password;
    const isAddressValid = addressPattern.test(address);
    const isMobileValid = mobilePattern.test(mobile);
    const isCnicValid = cnicPattern.test(cnic);

    return (
      isFullNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isAddressValid &&
      isMobileValid &&
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

  const handleAddressChange = value => {
    setAddress(value);
  };
  const validateAddress = () => {
    if (!address) {
      return '';
    }
    const addressRegex = /^[\w\s,'-]*$/;
    if (!addressRegex.test(address)) {
      return 'Invalid Address Format';
    }
    return '';
  };
  const addressError = validateAddress();

  const handleMobileChange = value => {
    setMobile(value);
  };
  const validateMobile = () => {
    if (!mobile) {
      return '';
    }
    const mobileRegex = /^(\+92|92|0)(3\d{2}|\d{2})(\d{7})$/;
    if (!mobileRegex.test(mobile)) {
      return 'Invalid Mobile Format';
    }
    return '';
  };
  const mobileError = validateMobile();

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

            <View style={styles.imgContainer}>
              {image && <Image source={{uri: image.path}} style={styles.img} />}
              <TouchableOpacity style={styles.button} onPress={handlePickImage}>
                <Text style={styles.buttontext}>Select Image</Text>
              </TouchableOpacity>
            </View>

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
                placeholder="Address"
                placeholderTextColor="white"
                value={address}
                onChangeText={handleAddressChange}
              />
              {addressError ? (
                <Text style={styles.validationerror}>{addressError}</Text>
              ) : null}
              <MaterialCommunityIcons
                name="map-marker-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor="white"
                value={mobile}
                onChangeText={handleMobileChange}
              />
              {mobileError ? (
                <Text style={styles.validationerror}>{mobileError}</Text>
              ) : null}
              <MaterialCommunityIcons
                name="phone-outline"
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

            <View
              style={{
                borderColor: '#ccc',
                top: -6,
                borderWidth: 2,
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                marginBottom: 20,
                marginTop: 20,
              }}>
              <Picker
                selectedValue={role}
                onValueChange={handleRoleChange}
                style={{
                  left: 20,
                  top: 8,
                  color: 'white',
                }}>
                <Picker.Item style={styles.item} label="Select Role" value="" />
                <Picker.Item
                  style={styles.item}
                  label="Citizen"
                  value="citizen"
                />
                <Picker.Item style={styles.item} label="OIC" value="oic" />
                <Picker.Item
                  style={styles.item}
                  label="Police Station"
                  value="policestation"
                />
              </Picker>
              <MaterialCommunityIcons
                name="account-outline"
                size={30}
                style={styles.icon}
              />
            </View>

            <View>
              {showBadgeField && (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Badge(Mandatory for OIC)!"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    value={badge}
                    onChangeText={handleBadgeChange}
                  />
                  <MaterialCommunityIcons
                    name="police-badge-outline"
                    size={30}
                    style={styles.icon}
                  />
                </View>
              )}
            </View>

            <View>
              {showStationIdField && (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Station ID(Mandatory for Police Station)!"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    value={stationid}
                    onChangeText={handleStationIdChange}
                  />
                  <MaterialCommunityIcons
                    name="police-station"
                    size={30}
                    style={styles.icon}
                  />
                </View>
              )}
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
    left: 85,
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

  buttontext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    bottom: 10,
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
