import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../consts/Colors';

const PoliceStationContact = ({navigation}) => {
  const [addressline, setAddressLine] = useState('');
  const [mobile, setMobile] = useState('');

  function Submit() {
    alert('Contact Update Successfully');
  }

  const isValidInput = () => {
    const mobilePattern = /^[0-9]{11}$/;

    const isMobileValid = mobilePattern.test(mobile);
    const isAddressValid = addressline.trim().length > 0;

    return isAddressValid && isMobileValid;
  };

  const handleMobileNumberChange = value => {
    setMobile(value);
  };

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
    <View>
      <View style={styles.formContainer}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder="Station Address"
            placeholderTextColor="black"
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

        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={styles.input}
            placeholder="Station Phone/Landline Number:"
            placeholderTextColor="black"
            keyboardType="numeric"
            value={mobile}
            onChangeText={handleMobileNumberChange}
          />
          {mobileNumberError ? (
            <Text style={styles.validationerror}>{mobileNumberError}</Text>
          ) : null}
          <MaterialCommunityIcons
            name="phone-outline"
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
  );
};

export default PoliceStationContact;

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
