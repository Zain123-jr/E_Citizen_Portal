import React from 'react';
import {ScrollView} from 'react-native';
import {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Formik} from 'formik';
import * as Yup from 'yup';
import COLORS from '../../../../consts/Colors';

const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Current password is required'),

  newPassword: Yup.string()
    .min(8, 'New password must be at least 8 characters')
    .required('New password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const OICChangePassword = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);

  function Submit() {
    alert('Password Changed Successfully');
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              secureTextEntry={hidePassword}
              placeholder="Current Password"
              placeholderTextColor={'black'}
            />
            <View style={styles.eyeIconContainer}>
              <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                <MaterialCommunityIcons
                  name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                  size={25}
                  color={hidePassword ? 'black' : 'black'}
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
              secureTextEntry={hidePassword1}
              placeholder="New Password"
              placeholderTextColor={'black'}
            />
            <View style={styles.eyeIconContainer}>
              <TouchableOpacity
                onPress={() => setHidePassword1(!hidePassword1)}>
                <MaterialCommunityIcons
                  name={hidePassword1 ? 'eye-off-outline' : 'eye-outline'}
                  size={25}
                  color={hidePassword1 ? 'black' : 'black'}
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
              secureTextEntry={hidePassword2}
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
            />
            <View style={styles.eyeIconContainer}>
              <TouchableOpacity
                onPress={() => setHidePassword2(!hidePassword2)}>
                <MaterialCommunityIcons
                  name={hidePassword2 ? 'eye-off-outline' : 'eye-outline'}
                  size={25}
                  color={hidePassword2 ? 'black' : 'black'}
                />
              </TouchableOpacity>
            </View>
            <MaterialCommunityIcons
              name="lock-outline"
              size={30}
              style={styles.icon}
            />
          </View>

          <TouchableOpacity onPress={() => Submit()} style={styles.button}>
            <Text style={styles.buttonText}>Update Password</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OICChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
  },

  formContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 125,
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
    paddingLeft: 35,
    marginBottom: 20,
    paddingBottom: 8,
    color: 'black',
    fontWeight: '800',
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

  icon: {
    position: 'absolute',
    top: 19,
    color: 'black',
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
    color: 'white',
    fontWeight: '700',
    paddingRight: 5,
  },

  eyeIconContainer: {
    position: 'absolute',
    top: 20,
    left: 260,
    padding: 5,
  },
});
