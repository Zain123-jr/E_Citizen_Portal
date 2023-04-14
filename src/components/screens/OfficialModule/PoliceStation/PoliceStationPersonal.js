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
import {Formik} from 'formik';
import * as Yup from 'yup';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

const UpdateProfileSchema = Yup.object().shape({
  stationId: Yup.string().required('Valid ID Required'),

  stationName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Station Name Required'),

  stationAddress: Yup.string().required('Station Address is required'),
});

const PoliceStationPersonal = ({navigation}) => {
  const [profile, setProfile] = useState(null);

  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setProfile(image.path);
    });
  };

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
            <Formik
              initialValues={{
                stationId: '',
                stationName: '',
              }}
              validationSchema={UpdateProfileSchema}>
              {({
                handleChange,
                values,
                errors,
                isValid,
                setFieldTouched,
                touched,
              }) => (
                <View style={styles.formContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <TextInput
                      style={styles.input}
                      placeholder="Station ID"
                      placeholderTextColor="black"
                      autoCapitalize="none"
                      value={values.stationId}
                      onChangeText={handleChange('stationId')}
                      onBlur={() => setFieldTouched('stationId')}
                    />
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
                      placeholderTextColor="black"
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
                  
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    disabled={!isValid}
                    style={[
                      styles.button,
                      {backgroundColor: isValid ? '#539165' : '#A5C9CA'},
                    ]}>
                    <Text style={styles.buttonText}>Update</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
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
    // backgroundColor: '#2196F3',
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

  errorText: {
    color: '#E0144C',
    fontWeight: '600',
    position: 'absolute',
    top: 60,
    fontSize: 12,
  },

  icon: {
    position: 'absolute',
    top: 19,
    color: '#000',
  },
});
