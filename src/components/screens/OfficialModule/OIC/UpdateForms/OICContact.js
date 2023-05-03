import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../../consts/Colors';

const OICContact = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [addressline, setAddressLine] = useState('');

  function handleSubmit() {
    alert('Contact Update Successfully');
  }

  const isValidInput = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailPattern.test(email);
    const isAddressValid = addressline.trim().length > 0;

    return isEmailValid && isAddressValid;
  };

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

  const handleAddressChange = value => {
    setAddressLine(value);
  };
  const validateAddress = () => {
    if (!addressline) {
      return '';
    }
    if (addressline.length < 5) {
      return 'Address must be at least 5 characters long';
    }
    return '';
  };
  const addressError = validateAddress();

  return (
    <View>
      <View style={styles.formContainer}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder="Email: (Hello123@gmail.com)"
            placeholderTextColor={COLORS.grey}
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
            placeholder="Address Line"
            placeholderTextColor={COLORS.grey}
            value={addressline}
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

        <TouchableOpacity
          disabled={!isValidInput()}
          style={[
            styles.button,
            {backgroundColor: isValidInput() ? COLORS.primary : '#ccc'},
          ]}
          onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OICContact;

const styles = StyleSheet.create({
  primarycontainer: {
    flex: 1,
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
