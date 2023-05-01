import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import '../../../../FirebaseConfig';
import '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/Colors';

const ContactUs = ({navigation}) => {
  const [reason, setReason] = useState('');
  const [mobile, setMobile] = useState('');
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReport = async () => {
    //to send report about app into firestore

    firestore()
      .collection('CitizenReport')
      .add({
        reason: reason,
        mobile: mobile,
        cnic: cnic,
        email: email,
        message: message,
      })
      .then(() => {
        alert(
          'Thank You! Your Report is Submit Successfully, We Will Contact Soon!',
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  const isValidInput = () => {
    const mobilePattern = /^[0-9]{11}$/;
    const cnicPattern = /^(\d{5})-?(\d{7})-?(\d{1})$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isReasonValid = reason.trim().length > 0;
    const isMobileValid = mobilePattern.test(mobile);
    const isCnicValid = cnicPattern.test(cnic);
    const isEmailValid = emailPattern.test(email);

    return isReasonValid && isMobileValid && isCnicValid && isEmailValid;
  };

  const handleReasonChange = value => {
    setReason(value);
  };
  const validateReason = () => {
    if (!reason) {
      return '';
    }
    return '';
  };
  const reasonError = validateReason();

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

  const handleCnicChange = value => {
    setCnic(value);
  };

  const validateCnic = () => {
    if (!cnic) {
      return '';
    }
    const cnicRegex = /^(\d{5})-?(\d{7})-?(\d{1})$/;
    if (!cnicRegex.test(cnic)) {
      return 'Invalid CNIC number';
    }
    return '';
  };
  const cnicError = validateCnic();

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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.formContainer}>
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
              style={{
                left: -18,
                top: 8,
                color: 'black',
              }}
              selectedValue={reason}
              onValueChange={handleReasonChange}>
              <Picker.Item style={styles.item} label="Pick a Reason" value="" />
              <Picker.Item
                style={styles.item}
                label="Password Reset Issue"
                value="Password Reset Issue"
              />

              <Picker.Item
                style={styles.item}
                label="Password Reset Code not Recieved"
                value="Password Reset Code not Recieved"
              />

              <Picker.Item
                style={styles.item}
                label="Change My CNIC"
                value="Password Change My CNIC"
              />

              <Picker.Item
                style={styles.item}
                label="Mobile App Bug Report"
                value="Mobile App Bug Report"
              />
            </Picker>
            {reasonError ? (
              <Text style={styles.validationerror}>{reasonError}</Text>
            ) : null}
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              placeholder="Mobile:"
              placeholderTextColor="black"
              keyboardType="numeric"
              value={mobile}
              onChangeText={handleMobileNumberChange}
            />
            {mobileNumberError ? (
              <Text style={styles.validationerror}>{mobileNumberError}</Text>
            ) : null}
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              placeholder="CNIC"
              placeholderTextColor="black"
              value={cnic}
              onChangeText={handleCnicChange}
            />
            {cnicError ? (
              <Text style={styles.validationerror}>{cnicError}</Text>
            ) : null}
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="black"
              value={email}
              onChangeText={handleEmailChange}
            />
            {emailError ? (
              <Text style={styles.validationerror}>{emailError}</Text>
            ) : null}
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.messagebox}
              placeholder="Enter Details Here! (Optional)! "
              placeholderTextColor="black"
              multiline={true}
              numberOfLines={6}
              value={message}
              onChangeText={setMessage}
            />
          </View>

          <TouchableOpacity
            onPress={handleReport}
            disabled={!isValidInput()}
            style={[
              styles.button,
              {backgroundColor: isValidInput() ? COLORS.primary : '#ccc'},
            ]}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

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

  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingTop: 20,
    marginBottom: 12,
    paddingBottom: 8,
    color: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: '100%',
  },

  messagebox: {
    borderWidth: 2,
    borderColor: '#ccc',
    paddingTop: 20,
    marginBottom: 20,
    paddingLeft: 5,
    paddingBottom: 8,
    color: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: '100%',
  },

  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    // backgroundColor: COLORS.primary,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
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
