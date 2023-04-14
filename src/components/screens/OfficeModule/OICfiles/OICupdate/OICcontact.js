import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from "formik";
import * as Yup from 'yup';
import COLORS from '../../../../consts/Colors';



const UpdateContactSchema = Yup.object().shape({

  email: Yup.string()
    .email('Invalid email')
    .required('Valid Email Required'),

  addressline: Yup.string()
    .required('Address line is required'),

});



const OICContact = ({ navigation }) => {

  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          addressline: '',
        }}

        validationSchema={UpdateContactSchema}
      >

        {({ handleChange, values, errors, isValid, setFieldTouched, touched }) => (
          <View style={styles.formContainer} >

            <View style={{ flexDirection: "row" }} >
              <TextInput
                style={styles.input}
                placeholder="Email: (Hello123@gmail.com)"
                placeholderTextColor={COLORS.grey}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              <MaterialCommunityIcons name="email-outline" size={30} style={styles.icon} />

              {touched.email && errors.email && (
                <Text style={styles.errorText} >{errors.email}</Text>
              )}
            </View>

            <View style={{ flexDirection: 'row' }} >
              <TextInput
                style={styles.input}
                placeholder="Address Line"
                placeholderTextColor={COLORS.grey}
                onChangeText={handleChange('addressline')}
                onBlur={() => setFieldTouched('addressline')}
                value={values.addressline}
              />
              <MaterialCommunityIcons name="map-marker-outline" size={30} style={styles.icon} />
              {touched.addressline && errors.addressline && (
                <Text style={styles.errorText} >{errors.addressline}</Text>)}
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              disabled={!isValid}
              style={[
                styles.button,
                { backgroundColor: isValid ? '#539165' : '#A5C9CA' },
              ]} >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default OICContact

const styles = StyleSheet.create({
  primarycontainer: {
    flex: 1,
  },

  formContainer: {
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 10,
    width: '95%',
    marginLeft: 10
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
    width: '100%'
  },

  button: {
    // backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
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
    fontSize: 12
  },

  icon: {
    position: 'absolute',
    top: 19,
    color: '#000'
  },
})


