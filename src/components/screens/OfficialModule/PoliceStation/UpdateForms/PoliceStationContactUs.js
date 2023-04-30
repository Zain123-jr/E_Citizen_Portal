import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import '../../../../../../FirebaseConfig';
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
import COLORS from '../../../../consts/Colors';

const ContactUs = ({navigation}) => {
  const [reason, setReason] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReport = async () => {
    //to send report about app into firestore
    if (reason == '') {
      alert('Select Reason');
    } else if (mobile == '') {
      alert('Enter Mobile');
    } else if (email == '') {
      alert('Enter Email');
    } else if (message == '') {
      alert('Enter Details of Reason');
    } else {
      firestore()
        .collection('PoliceStationReport')
        .add({
          reason: reason,
          mobile: mobile,
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
    }
  };

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
              onValueChange={setReason}>
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
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              placeholder="Mobile:"
              placeholderTextColor="black"
              keyboardType="numeric"
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="black"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.messagebox}
              placeholder="Enter Details Here!"
              placeholderTextColor="black"
              multiline={true}
              numberOfLines={6}
              value={message}
              onChangeText={setMessage}
            />
          </View>

          <TouchableOpacity onPress={handleReport} style={styles.button}>
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
    backgroundColor: COLORS.primary,
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
});
