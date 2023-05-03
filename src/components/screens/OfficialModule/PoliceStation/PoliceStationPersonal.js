import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import imgPlaceHolder from '../../../../assets/defualt-Avatar.png';
import ImagePicker, {openPicker} from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import COLORS from '../../../consts/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

const PoliceStationPersonal = ({navigation}) => {
  const [profile, setProfile] = useState(null);
  const [fullname, setfullName] = useState('');
  const [email, setEmail] = useState('');

  function Submit() {
    alert('Profile Update Successfully');
  }

  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfile(image.path);
    });
  };

  const isValidInput = () => {
    const fullNamePattern = /^[a-zA-Z\s]*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isFullNameValid = fullNamePattern.test(fullname);
    const isEmailValid = emailPattern.test(email);

    return isFullNameValid && isEmailValid;
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

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.primarycontainer}>
          <View style={styles.profileContainer}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.image}
                source={profile ? {uri: profile} : imgPlaceHolder}
              />
              <TouchableOpacity
                onPress={imagePick}
                style={{alignItems: 'flex-end', top: -10}}>
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={30}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.formContainer}>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.input}
                  placeholder="Station Name"
                  placeholderTextColor="black"
                  autoCapitalize="none"
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
                  placeholder="Station Email"
                  placeholderTextColor="black"
                  autoCapitalize="none"
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

              <TouchableOpacity
                disabled={!isValidInput()}
                onPress={() => Submit()}
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

export default PoliceStationPersonal;

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
