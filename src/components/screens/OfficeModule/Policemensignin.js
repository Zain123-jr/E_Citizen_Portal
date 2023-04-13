import React from "react";
import { ScrollView } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Formik } from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Full Name Required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Valid Email Required'),

  password: Yup.string()
    .min(8)
    .required('Password Required')
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters'),

  confirmPassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')], 'Passwords did not Match')
    .required('Confirm Password is Required'),

  dateofBirth: Yup.date()
    .max(new Date(), 'Date of Birth is Incorrect')
    .required('DOB is required'),

  gender: Yup.string()
    .required('Please select a gender'),

  mobile: Yup.string()
    .required('Mobile Number Required'),

  addressline: Yup.string()
    .required('Address line is required'),

  cnic: Yup.string()
    .min(13)
    .matches(/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format')
    .required('Enter Required'),
});

const PolicemenSignup = ({ navigation }) => {

  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);

  return (

    <Formik initialValues={{
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      dateofBirth: '',
      gender: '',
      mobile: '',
      addressline: '',
      cnic: '',
    }}

      validationSchema={SignupSchema}

    >

      {({ values, errors, touched, handleChange, setFieldTouched, isValid }) => (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={require("../../../assets/signup_bg.jpeg")}
          >
            <ScrollView>
              <View style={styles.formContainer}>
                <Text style={styles.heading}>Signup</Text>
                <Text style={styles.description}>Please provide all required details to register</Text>


                <View style={{ flexDirection: "row" }} >
                  <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor='white'
                    autoCapitalize="none"
                    value={values.fullName}
                    onChangeText={handleChange('fullName')}
                    onBlur={() => setFieldTouched('fullName')}
                  />
                  <MaterialCommunityIcons name="account-circle-outline" size={30} style={styles.icon} />
                  {touched.fullName && errors.fullName && (
                    <Text style={styles.errorText} >{errors.fullName}</Text>
                  )}
                </View>

                <View style={{ flexDirection: "row" }} >
                  <TextInput
                    style={styles.input}
                    placeholder="Email: (Hello123@gmail.com)"
                    placeholderTextColor='white'
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  <MaterialCommunityIcons name="email-outline" size={30} style={styles.icon} />

                  {touched.email && errors.email && (
                    <Text style={styles.errorText} >{errors.email}</Text>
                  )}
                </View>


                <View style={{ flexDirection: "row" }} >
                  <TextInput
                    style={styles.input}
                    placeholder="Password: (Hello123#)"
                    placeholderTextColor='white'
                    secureTextEntry={hidePassword}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                  />
                  <View style={styles.eyeIconContainer}>
                    <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                      <MaterialCommunityIcons
                        name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                        size={25}
                        color={hidePassword ? 'white' : 'white'}
                      />
                    </TouchableOpacity>
                  </View>
                  <MaterialCommunityIcons name="lock-outline" size={30} style={styles.icon} />
                  {touched.password && errors.password && (
                    <Text style={styles.errorText} >{errors.password}</Text>
                  )}
                </View>


                <View style={{ flexDirection: "row" }} >
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password: (Hello123#)"
                    placeholderTextColor='white'
                    secureTextEntry={hidePassword1}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={() => setFieldTouched('confirmPassword')}
                  />
                  <View style={styles.eyeIconContainer}>
                    <TouchableOpacity onPress={() => setHidePassword1(!hidePassword1)}>
                      <MaterialCommunityIcons
                        name={hidePassword1 ? 'eye-off-outline' : 'eye-outline'}
                        size={25}
                        color={hidePassword1 ? 'white' : 'white'}
                      />
                    </TouchableOpacity>
                  </View>
                  <MaterialCommunityIcons name="lock-outline" size={30} style={styles.icon} />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.errorText} >{errors.confirmPassword}</Text>
                  )}
                </View>


                <View style={{ flexDirection: "row" }} >
                  <TextInput
                    style={styles.input}
                    placeholder="Date of Birth: (DD-MM-YY)"
                    placeholderTextColor='white'
                    keyboardType="numeric"
                    value={values.dateofBirth}
                    onChangeText={handleChange('dateofBirth')}
                    onBlur={() => setFieldTouched('dateofBirth')}
                  />
                  <MaterialCommunityIcons name="calendar-outline" size={30} style={styles.icon} />
                  {touched.dateofBirth && errors.dateofBirth && (
                    <Text style={styles.errorText} >{errors.dateofBirth}</Text>
                  )}
                </View>

                <View style={{ borderColor: '#ccc', top: -6, borderWidth: 2, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }} >
                  <Picker
                    style={{
                      left: 18,
                      top: 8,
                      color: 'white',
                    }}
                    selectedValue={values.gender}
                    onValueChange={handleChange('gender')}
                    onBlur={() => setFieldTouched('gender')}
                  >
                    <Picker.Item style={styles.item} label="Select gender" value="" />
                    <Picker.Item style={styles.item} label="Male" value="male" />
                    <Picker.Item style={styles.item} label="Female" value="female" />
                  </Picker>

                  <MaterialCommunityIcons name="gender-male" size={30} style={styles.icon} />
                  {touched.gender && errors.gender && (
                    <Text style={styles.errorText}>{errors.gender}</Text>
                  )}
                </View>

                <View style={{ flexDirection: "row" }} >
                  <TextInput
                    style={styles.input}
                    placeholder="Mobile:"
                    placeholderTextColor='white'
                    keyboardType="numeric"
                    value={values.mobile}
                    onChangeText={handleChange('mobile')}
                    onBlur={() => setFieldTouched('mobile')}
                  />
                  <MaterialCommunityIcons name="phone-outline" size={30} style={styles.icon} />
                  {touched.mobile && errors.mobile && (
                    <Text style={styles.errorText} >{errors.mobile}</Text>
                  )}
                </View>

                <View style={{ flexDirection: 'row' }} >
                  <TextInput
                    style={styles.input}
                    placeholder="Address Line"
                    placeholderTextColor='white'
                    onChangeText={handleChange('addressline')}
                    onBlur={() => setFieldTouched('addressline')}
                    value={values.addressline}
                  />
                  <MaterialCommunityIcons name="map-marker-outline" size={30} style={styles.icon} />
                  {touched.addressline && errors.addressline && (
                    <Text style={styles.errorText} >{errors.addressline}</Text>)}
                </View>


                <View style={{ flexDirection: "row" }} >
                  <TextInput
                    style={styles.input}
                    placeholder="CNIC: (XXXXX-XXXXXXX-X)"
                    placeholderTextColor='white'
                    keyboardType="numeric"
                    value={values.cnic}
                    onChangeText={handleChange('cnic')}
                    onBlur={() => setFieldTouched('cnic')}
                  />
                  <MaterialCommunityIcons name="id-card" size={30} style={styles.icon} />
                  {touched.cnic && errors.cnic && (
                    <Text style={styles.errorText} >{errors.cnic}</Text>
                  )}
                </View>


                <TouchableOpacity
                  onPress={() => navigation.navigate('PolicemenLogin')}
                  disabled={!isValid}
                  style={[
                    styles.button,
                    { backgroundColor: isValid ? '#539165' : '#A5C9CA' },
                  ]} >
                  <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <View style={styles.extracontainer} >
                  <Text style={styles.extra} >Already have an account ?</Text>
                  <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('PolicemenLogin')} >
                    <Text style={styles.btntext} >Login</Text>
                  </TouchableOpacity>
                </View>

              </View>
            </ScrollView>

          </ImageBackground>
        </SafeAreaView>
      )}
    </Formik>
  );
};

export default PolicemenSignup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    textAlign: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 30,
  },

  image: {
    flex: 1,
    width: "100%",
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
    marginLeft: 10
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
    width: '100%'
  },

  button: {
    // backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },

  errorText: {
    color: '#E0144C',
    fontWeight: '600',
    position: 'absolute',
    top: 60,
  },

  icon: {
    position: 'absolute',
    top: 19,
    color: 'white'
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
    top: 10
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
  }
});






