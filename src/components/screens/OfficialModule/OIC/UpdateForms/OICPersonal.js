import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import imgPlaceHolder from '../../../../../assets/defualt-Avatar.png';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState, useEffect} from 'react';
import COLORS from '../../../../consts/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import '../../../../../../FirebaseConfig';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

const OICPersonal = ({navigation}) => {
  const [imageUrl, setImageUrl] = useState('');
  const authInstance = auth();
  const [fullname, setfullName] = useState('');
  const [mobile, setMobile] = useState('');

  const handlePickImage = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setImageUrl(image.path);
    });
  };

  useEffect(() => {
    const fetchImageUrl = async () => {
      const user = authInstance.currentUser;
      if (user) {
        try {
          const url = await storage()
            .ref(`users/${user.uid}/`) // Name in storage in Firebase console
            .getDownloadURL();
          setImageUrl(url);
        } catch (error) {
          alert('Error while downloading: ' + error);
        }
      } else {
        // User is not logged in, handle this case if needed
      }
    };

    fetchImageUrl();
  }, []);

  const handleUpdatePersonal = async () => {
    const user = authInstance.currentUser;
    try {
      // Update the Firestore document with the new values
      await firestore().collection('users').doc(user.uid).update({
        fullname,
        mobile,
      });

      alert('Personal information updated successfully!');
    } catch (error) {
      alert('Error updating personal information:', error);
    }
  };

  const isValidInput = () => {
    const fullNamePattern = /^[a-zA-Z\s]*$/;
    const mobilePattern = /^[0-9]{11}$/;

    const isFullNameValid = fullNamePattern.test(fullname);
    const isMobileValid = mobilePattern.test(mobile);

    return isFullNameValid && isMobileValid;
  };

  const handleFullnameChange = value => {
    setfullName(value);
  };
  const validateFullname = () => {
    if (!fullname) {
      return '';
    }
    const regex = /^[a-zA-Z\s]*$/;
    if (!fullname.match(regex)) {
      return 'Special Characters Not Allowed';
    }
    return '';
  };
  const fullnameError = validateFullname();

  const handleMobileNumberChange = value => {
    setMobile(value);
  };
  const validateMobileNumber = () => {
    if (!mobile) {
      return '';
    }
    const mobileNumberRegex = /^[0-9]{11}$/;
    if (!mobileNumberRegex.test(mobile)) {
      return 'Invalid mobile number';
    }
    return '';
  };
  const mobileNumberError = validateMobileNumber();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.primarycontainer}>
          <View style={styles.profileContainer}>
            <View style={styles.imgContainer}>
              <TouchableOpacity onPress={handlePickImage}>
                {imageUrl ? (
                  <Image source={{uri: imageUrl}} style={styles.image} />
                ) : (
                  <Image source={imgPlaceHolder} style={styles.image} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.formContainer}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor={COLORS.gender}
                  value={fullname}
                  onChangeText={handleFullnameChange}
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
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={mobile}
                  onChangeText={handleMobileNumberChange}
                />
                {mobileNumberError ? (
                  <Text style={styles.validationerror}>
                    {mobileNumberError}
                  </Text>
                ) : null}
                <MaterialCommunityIcons
                  name="phone-outline"
                  size={30}
                  style={styles.icon}
                />
              </View>

              <TouchableOpacity
                onPress={handleUpdatePersonal}
                disabled={!isValidInput()}
                style={[
                  styles.button,
                  {backgroundColor: isValidInput() ? COLORS.primary : '#ccc'},
                ]}>
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OICPersonal;

const styles = StyleSheet.create({
  primarycontainer: {
    flex: 1,
  },

  profileContainer: {
    flex: 0.8,
    marginTop: 20,
    alignItems: 'center',
  },

  imgContainer: {},

  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: COLORS.primary,
    borderWidth: 4,
  },

  formContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 10,
    width: '95%',
    marginLeft: 10,
  },

  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingTop: 20,
    paddingLeft: 40,
    marginBottom: 25,
    paddingBottom: 8,
    color: '#000',
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
    alignItems: 'center',
    marginTop: 50,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  icon: {
    position: 'absolute',
    top: 19,
    color: '#000',
  },

  validationerror: {
    color: 'red',
    position: 'absolute',
    top: 60,
    fontWeight: '700',
    fontSize: 13,
  },
});
