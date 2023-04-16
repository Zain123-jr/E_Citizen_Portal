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
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  stationId: Yup.string().required('Valid ID Required'),

  stationName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Station Name Required'),

  password: Yup.string()
    .min(8)
    .required('Password Required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Must contain minimum 8 characters',
    ),

  confirmPassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref('password')], 'Passwords did not Match')
    .required('Confirm Password is Required'),

  stationAddress: Yup.string().required('Station Address is required'),

  stationPhoneNo: Yup.string().required('Phone/Landline Number Required'),
});

const PoliceStationSignup = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword1, setHidePassword1] = useState(true);
  // const [hideBadge, setHideBadge] = useState(true);

  function Submit() {
    alert('Station Registered Successfully');
    navigation.navigate('PoliceStationLogin');
  }

  return (
    <Formik
      initialValues={{
        stationId: '',
        stationName: '',
        password: '',
        confirmPassword: '',
        stationAddress: '',
        stationPhoneNo: '',
      }}
      validationSchema={SignupSchema}>
      {({values, errors, touched, handleChange, setFieldTouched, isValid}) => (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={require('../../../../assets/signup_bg.jpeg')}>
            <ScrollView>
              <View style={styles.formContainer}>
                <Text style={styles.heading}>Police HQ Signup</Text>
                <Text style={styles.description}>
                  Please provide all required details to register
                </Text>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Station ID"
                    placeholderTextColor="white"
                    // secureTextEntry={hideBadge}
                    value={values.badge}
                    onChangeText={handleChange('stationId')}
                    onBlur={() => setFieldTouched('sationId')}
                  />
                  {/* <View style={styles.eyeIconContainer}>
                    <TouchableOpacity onPress={() => setHideBadge(!hideBadge)}>
                      <MaterialCommunityIcons
                        name={hideBadge ? 'eye-off-outline' : 'eye-outline'}
                        size={25}
                        color={hideBadge ? 'white' : 'white'}
                      />
                    </TouchableOpacity>
                  </View> */}
                  <MaterialCommunityIcons
                    name="id-card"
                    size={30}
                    style={styles.icon}
                  />
                  {touched.stationId && errors.stationId && (
                    <Text style={styles.errorText}>{errors.stationId}</Text>
                  )}
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Station Name"
                    placeholderTextColor="white"
                    autoCapitalize="none"
                    value={values.stationName}
                    onChangeText={handleChange('stationName')}
                    onBlur={() => setFieldTouched('stationName')}
                  />
                  <MaterialCommunityIcons
                    name="account-circle-outline"
                    size={30}
                    style={styles.icon}
                  />
                  {touched.stationName && errors.stationName && (
                    <Text style={styles.errorText}>{errors.stationName}</Text>
                  )}
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password: (Hello123#)"
                    placeholderTextColor="white"
                    secureTextEntry={hidePassword}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
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
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password: (Hello123#)"
                    placeholderTextColor="white"
                    secureTextEntry={hidePassword1}
                    value={values.confirmPassword}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={() => setFieldTouched('confirmPassword')}
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
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.errorText}>
                      {errors.confirmPassword}
                    </Text>
                  )}
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Station Address"
                    placeholderTextColor="white"
                    onChangeText={handleChange('stationAddress')}
                    onBlur={() => setFieldTouched('stationAddress')}
                    value={values.stationAddress}
                  />
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={30}
                    style={styles.icon}
                  />
                  {touched.stationAddress && errors.stationAddress && (
                    <Text style={styles.errorText}>
                      {errors.stationAddress}
                    </Text>
                  )}
                </View>

                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.input}
                    placeholder="Station Phone/Landline Number:"
                    placeholderTextColor="white"
                    keyboardType="numeric"
                    value={values.s}
                    onChangeText={handleChange('stationPhoneNumber')}
                    onBlur={() => setFieldTouched('stationPhoneNumber')}
                  />
                  <MaterialCommunityIcons
                    name="phone-outline"
                    size={30}
                    style={styles.icon}
                  />
                  {touched.stationPhoneNo && errors.stationPhoneNo && (
                    <Text style={styles.errorText}>{errors.stationPhoneNo}</Text>
                  )}
                </View>

                <TouchableOpacity
                  onPress={() => Submit()}
                  disabled={!isValid}
                  style={[
                    styles.button,
                    {backgroundColor: isValid ? '#539165' : '#A5C9CA'},
                  ]}>
                  <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>

                <View style={styles.extracontainer}>
                  <Text style={styles.extra}>Already have an account ?</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('PoliceStationLogin')}>
                    <Text style={styles.btntext}>Login</Text>
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

export default PoliceStationSignup;

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
    // backgroundColor: '#2196F3',
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

  errorText: {
    color: '#E0144C',
    fontWeight: '600',
    position: 'absolute',
    top: 60,
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
