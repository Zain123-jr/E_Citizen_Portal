import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text } from 'react-native'
import imgPlaceHolder from '../../../../assets/defualt-Avatar.png'
import ImagePicker, { openPicker } from 'react-native-image-crop-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react'
import COLORS from '../../../consts/Colors'
import { Formik } from "formik";
import * as Yup from 'yup';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";



const UpdateProfileSchema = Yup.object().shape({

    fullName: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Full Name Required'),

    cnic: Yup.string()
        .min(13)
        .matches(/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format')
        .required('Enter CNIC Required'),

    phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Please enter a valid phone number')
        .required('Please enter your phone number'),

    dateofBirth: Yup.date()
        .max(new Date(), 'Date of Birth is Incorrect')
        .required('DOB is required'),

    gender: Yup.string()
        .required('Please select a gender'),


});



const Personal = ({ navigation, route }) => {

    const [profile, setProfile] = useState(null)

    const imagePick = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            setProfile(image.path)
        });
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.primarycontainer}>
                    <View style={styles.profileContainer}>
                        <View style={styles.imgContainer}>
                            <Image style={styles.image} source={profile ? { uri: profile } : imgPlaceHolder} />
                            <TouchableOpacity onPress={imagePick}
                                style={{ alignItems: 'flex-end', top: -10 }}>
                                <MaterialCommunityIcons name="plus-circle" size={30} color={COLORS.primary} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Formik
                            initialValues={{
                                fullName: '',
                                cnic: '',
                                phoneNumber: '',
                                dateofBirth: '',
                                gender: '',
                            }}

                            validationSchema={UpdateProfileSchema}
                        >

                            {({ handleChange, handleBlur, values, errors, isValid, setFieldTouched, touched }) => (
                                <View style={styles.formContainer} >
                                    <View style={{ flexDirection: 'row' }} >
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleChange('fullName')}
                                            onBlur={handleBlur('fullName')}
                                            value={values.fullName}
                                            placeholder="Full Name"
                                            placeholderTextColor={COLORS.gender}
                                        />
                                        <MaterialCommunityIcons name="account-circle-outline" size={30} style={styles.icon} />
                                        {errors.fullName && touched.fullName && (
                                            <Text style={styles.errorText}>{errors.fullName}</Text>
                                        )}
                                    </View>


                                    <View style={{ flexDirection: "row" }} >
                                        <TextInput
                                            style={styles.input}
                                            placeholder="CNIC: (XXXXX-XXXXXXX-X)"
                                            placeholderTextColor={COLORS.grey}
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


                                    <View style={{ flexDirection: 'row' }} >
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleChange('phoneNumber')}
                                            onBlur={handleBlur('phoneNumber')}
                                            value={values.phoneNumber}
                                            placeholder="Phone Number"
                                            keyboardType="phone-pad"
                                        />
                                        <MaterialCommunityIcons name="phone-outline" size={30} style={styles.icon} />
                                        {errors.phoneNumber && touched.phoneNumber && (
                                            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                                        )}
                                    </View>

                                    <View style={{ flexDirection: "row" }} >
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Date of Birth: (DD-MM-YY)"
                                            placeholderTextColor={COLORS.grey}
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
                                                left: 25,
                                                top: 8,
                                                color: COLORS.grey,
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


                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('CitizenLogin')}
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


                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

export default Personal

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


